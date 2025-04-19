
let g_left = 0,g_right = 0;




// ボタン０をおしたとき

function OnClickButton_0(){
    

 
    g_right *= 10;
    g_right += 0;
    document.getElementById("t-box").value=g_right;
   
}

// ボタン１をおしたとき
function OnClickButton_1(){
    g_right *= 10;
    g_right += 1;
    document.getElementById("t-box").value=g_right;
}

// ボタン２をおしたとき
function OnClickButton_2(){
    g_right = 2;
    document.getElementById("t-box").value=g_right;
}

// ボタン３をおしたとき
function OnClickButton_3(){
    g_right = 3;
    document.getElementById("t-box").value=g_right;
}

// ボタン４をおしたとき
function OnClickButton_4(){
    g_right = 4;
    document.getElementById("t-box").value=g_right;
}

// ボタン５をおしたとき
function OnClickButton_5(){
    g_right = 5;
    document.getElementById("t-box").value=g_right;
}

// ボタン６をおしたとき
function OnClickButton_6(){
    g_right = 6;
    document.getElementById("t-box").value=g_right;
}

// ボタン７をおしたとき
function OnClickButton_7(){
    g_right = 7;
    document.getElementById("t-box").value=g_right;
}

// ボタン８をおしたとき
function OnClickButton_8(){
    g_right = 8;
    document.getElementById("t-box").value=g_right;
}

// ボタン９をおしたとき
function OnClickButton_9(){
    g_right = 9;
    document.getElementById("t-box").value=g_right;
}


// ボタン＋をおしたとき
function OnClickButton_plus(){
    console.debug("plus");
}


// ボタンーをおしたとき
function OnClickButton_diff(){
    console.debug("diff");
}

// ボタン×をおしたとき
function OnClickButton_mul(){
    console.debug("mul");
}

// ボタン÷をおしたとき
function OnClickButton_div(){
    console.debug("div");
}


// ボタンDELをおしたとき
function OnClickButton_del(){
    console.debug("del");
}


// ボタン＝をおしたとき
function OnClickButton_equal(){
    console.debug("equal");
}

// ボタンACをおしたとき
function OnClickButton_allclear(){
    console.debug("allclear");
}