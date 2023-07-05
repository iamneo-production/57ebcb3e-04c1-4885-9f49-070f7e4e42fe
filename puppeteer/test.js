const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-fceccccabdbfddcebdeffacdceeafdbabefbbdddcc.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    let x = Math.floor((Math.random() * 1000) + 1);
    await page.click('#signup');
    await page.type('#email', 'student'+x+'@iamneo.ai');
    await page.type('#username', 'test');
    await page.type('#mobilenumber', "9876543210");
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#submitButton');
    await page.waitForSelector('#loginBox',{timeout:1500});
    console.log('TESTCASE:test_case1:success');
    }
     catch(e){
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();


  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-fceccccabdbfddcebdeffacdceeafdbabefbbdddcc.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'admin');
    await page.type('#password', 'admin');
    await page.click('#submitButton');
    await page.waitForSelector('#adminNavbar',{timeout:1500});
    console.log('TESTCASE:test_case2:success');
    } catch(e) {
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-fceccccabdbfddcebdeffacdceeafdbabefbbdddcc.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
      let y = (Math.random() + 1).toString(36).substring(7);
    await page.click('#signup');
    await page.type('#email', 'student'+y+'@iamneo.ai');
    await page.type('#username', 'test');
    await page.type('#mobilenumber', "9876543210");
    await page.type('#password', 'test');
    await page.type('#confirmpassword', 'test');
    await page.click('#submitButton');
    await page.waitForSelector('#loginBox',{timeout:1500});
    await page.type('#email', 'student'+y+'@iamneo.ai');
    await page.type('#password', 'test');
    await page.click('#submitButton');
    await page.waitForSelector('#navbar',{timeout:1500});
    await page.click('#cartButton');
    await page.waitForSelector('#cartBody',{timeout:1500});
      console.log('TESTCASE:test_case3:success');
    } catch(e) {
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-fceccccabdbfddcebdeffacdceeafdbabefbbdddcc.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('#email', 'admin');
    await page.type('#password', 'admin');
    await page.click('#submitButton');
    await page.waitForSelector('#adminNavbar' ,{timeout:1500});
    await page.click("#orders");
      // await page.screenshot({path: 'example3.png'});
      await page.waitForSelector('#orderlist' ,{timeout:1500});
      console.log('TESTCASE:test_case4:success');
    } catch(e) {
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();
 
  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    
    try {
      await page.goto('https://8081-fceccccabdbfddcebdeffacdceeafdbabefbbdddcc.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('#email', 'admin');
    await page.type('#password', 'admin');
    await page.click('#submitButton');
    await page.waitForSelector('#adminNavbar' ,{timeout:1500});
      await page.click("#logout");
      // await page.screenshot({path: 'example4.png'});
    await page.waitForSelector('#loginBox',{timeout:1500});
      console.log('TESTCASE:test_case5:success');
    } catch(e) {
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();