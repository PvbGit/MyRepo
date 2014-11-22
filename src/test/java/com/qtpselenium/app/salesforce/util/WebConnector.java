package com.qtpselenium.app.salesforce.util;



import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebConnector 
{
  //private static final String URL = null;
	Properties OR = null;
    Properties config = null;
    WebDriver driver = null;
    WebDriver mozilla=null;
    WebDriver chrome=null;
    WebDriver ie=null;
    static WebConnector w;
	private WebConnector() 
	{
		if(OR==null)
		{
			
			try
			{
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir") + "\\src\\test\\resources\\com\\qtpselenium\\app\\config\\OR.properties");
				OR.load(fs);
				
				config = new Properties();
				System.out.println(OR.getProperty("loginusername"));
				
				config = new Properties();
				FileInputStream fs1 = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\com\\qtpselenium\\app\\config\\" + OR.getProperty("testEnv") + "_config.properties");
				config.load(fs1);
				
				OR.getProperty("testEnv");
				System.out.println(config.getProperty("loginURL"));
			}catch(Exception e)
			{
				System.out.println("Error on intializing properties files");
			}
		}
	}
	public void click(String objectName)
	{
		driver.findElement(By.xpath(OR.getProperty(objectName))).click();
	}
	public void type(String text, String objectName)
	{
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
	}

	public String getUserName(String text)
	{
		return driver.findElement(By.xpath(OR.getProperty(text))).getText();
	}

	public boolean isElementPresent(String objectName)
	{
		int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
		System.out.println("The element status is " + count);
	    if(count==0)
	    	 return false;
	    else
		     return true;
	}

	public void openBrowser(String browserType)
	{
		//String browserType = null;
		if(browserType.equals("Mozilla") && mozilla==null)
		{
			driver = new FirefoxDriver();
			mozilla=driver;
		}
		else if(browserType.equals("Mozilla") && mozilla != null)
		{
			driver=mozilla;
		}
		else if(browserType.equals("Chrome") && chrome==null)
		{
			System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
            driver = new ChromeDriver();
            chrome=driver;
		}
		else if(browserType.equals("Chrome" ) && chrome !=null)
		{
			driver=chrome;
		}
		else if(browserType.equals("IE"))
		{
			
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	}
	public void navigate(String loginURL)
	{
		driver.get(config.getProperty("loginURL"));
	}
	public static void main(String args[]) throws Exception
	{
		WebConnector wc = new WebConnector();
	
	}
	public void implicitWait()
	{
		  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}
	public void Close()
	{
		driver.quit();
	}
	
	public static WebConnector getInstance()
	{
		
		if(w==null)
			   w=new WebConnector();
		
		return w;
	}


}
