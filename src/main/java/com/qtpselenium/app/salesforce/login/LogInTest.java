package com.qtpselenium.app.salesforce.login;


import java.util.concurrent.TimeUnit;

//import junit.framework.Assert;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogInTest 
{
	
	  protected WebDriver driver;
	  WebConnector wc = WebConnector.getInstance();
	 /*@Before
     public void setUp() 
	 {
          //String browserType="Mozilla";
		 driver = new FirefoxDriver();
           driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
           driver.manage().window().maximize();
		 wc.openBrowser();
     }*/

     /*@After
     public void tearDown() 
     {
           wc.Close();
     }*/
	
	@Given("^I navigate to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_Go_To_Salesforce(String url, String browser)

	{
	    System.out.println("I am Going to " + url + "  in " + browser);
	    wc.openBrowser(browser);
	    wc.navigate(url);
	    //driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	/*@And("^click on \"([^\"]*)\"$")
	public void click_on(String object)
	{
	   System.out.println("Entering in " + object);
	   driver.findElement(By.id("button-login")).click();
	   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}*/

	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text)
	{
	   System.out.println("Entering in " + object + " value " + text);
	   //driver.findElement(By.id(object)).sendKeys(text);
	   wc.type(text, object);
	}

	@When("^I click on \"([^\"]*)\"$")
	public void I_click_on(String object)
	{
	  System.out.println("Clicking on " + object);
	  //driver.findElement(By.name(object)).click();
	  wc.click(object);
	  wc.implicitWait();
	}

	
	@Then("^Login \"([^\"]*)\" should be \"([^\"]*)\"$")
	public void Then_login_username_should_be(String object,String expectedResult)
	{
	  System.out.println("Login - " + expectedResult);
	  //String actual = driver.findElement(By.id(uname)).getText();
	  boolean result = wc.isElementPresent(object);
	  String actualResult=null;
	  
	  if(result)
		    actualResult="success";
	  else
		    actualResult="failure";
	  Assert.assertEquals(expectedResult, actualResult);
	  
	}
	  
	  

}
