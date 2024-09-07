

setInterval(()=>{
    if(screen.width >= 1100){
        document.querySelector('.firstPage_ContainerII').style.display='block';
    }else{
        document.querySelector('.firstPage_ContainerII').style.display='none';
    }


    //change
    if(screen.height<588){
        document.querySelector('.firstPage_ContainerI').style.display='block';
    }


},100)

setTimeout(()=>{
    
     if(true){
         document.querySelector('.firstPage_ContainerI').style.display='none';
     }

},10000)


//displayWalletAmount
if(localStorage.getItem('displayWalletAmount')===null){
    localStorage.setItem('displayWalletAmount',0)
}












//mainWalletContainer_div
let mainWalletContainer_div=document.querySelector('.mainWalletContainer_div');
//mainWalletContainer
let mainWalletContainer_sendPage=document.querySelector('.mainWalletContainer_sendPage');
let mainWalletContainer_receivePage=document.querySelector('.mainWalletContainer_receivePage');
let mainWalletContainer_swapPage=document.querySelector('.mainWalletContainer_swapPage');
let mainWalletContainer_backupPage=document.querySelector('.mainWalletContainer_backupPage');
let mainWalletContainer_settingButton=document.querySelector('.mainWalletContainer_settingButton');
let mainWalletContainer_sendPageI=document.querySelector('.mainWalletContainer_sendPageI');
let mainWalletContainer_sendPageII=document.querySelector('.mainWalletContainer_sendPageII');




//mainWallet_C_homePage_TCD
let mainWallet_C_homePage_TCD=document.querySelector('.mainWallet_C_homePage_TCD');
//mainWallet_C_homePage_TC
let mainWallet_C_homePage_TC_WC=document.querySelector('.mainWallet_C_homePage_TC_WC');
let mainWallet_C_homePage_TC_HC=document.querySelector('.mainWallet_C_homePage_TC_HC');
let mainWallet_C_homePage_TC_BC=document.querySelector('.mainWallet_C_homePage_TC_BC');
let receiveSend_containerDiv=document.querySelector('.receiveSend_mainContainerDiv');


let realCoins_mainContainer_x2TopDiv=document.querySelector('.realCoins_mainContainer_x2TopDiv');
let realCoins_mainContainer_x2BottomDiv=document.querySelector('.realCoins_mainContainer_x2BottomDiv');






if(screen.height<=740){
    //mainWalletContainer_div
    mainWalletContainer_div.style.height=`${screen.height}px`;
    //mainWalletContainer
    mainWalletContainer_sendPage.style.height=`${screen.height}px`;
    mainWalletContainer_receivePage.style.height=`${screen.height}px`;
    mainWalletContainer_swapPage.style.height=`${screen.height}px`;
    mainWalletContainer_backupPage.style.height=`${screen.height}px`;
    mainWalletContainer_settingButton.style.height=`${screen.height}px`;
    mainWalletContainer_sendPageI.style.height=`${screen.height}px`;
    mainWalletContainer_sendPageII.style.height=`${screen.height}px`;
    //mainWallet_C_homePage_TCD
    mainWallet_C_homePage_TCD.style.height=`${screen.height-90}px`;
    //mainWallet_C_homePage_TC
    mainWallet_C_homePage_TC_WC.style.height=`${screen.height-90}px`;
    mainWallet_C_homePage_TC_HC.style.height=`${screen.height-90}px`;
    mainWallet_C_homePage_TC_BC.style.height=`${screen.height-90}px`;
    receiveSend_containerDiv.style.height=`${screen.height-90}px`;


    realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-90-28)/3}px`;
    realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-90-20)-((screen.height-90-20)/3)-50)-10}px`;


}else{
    //mainWalletContainer_div
    mainWalletContainer_div.style.height=`${screen.height-142}px`;
    //mainWalletContainer
    mainWalletContainer_sendPage.style.height=`${screen.height-142}px`;
    mainWalletContainer_receivePage.style.height=`${screen.height-142}px`;
    mainWalletContainer_swapPage.style.height=`${screen.height-142}px`;
    mainWalletContainer_backupPage.style.height=`${screen.height-142}px`;
    mainWalletContainer_settingButton.style.height=`${screen.height-142}px`;
    mainWalletContainer_sendPageI.style.height=`${screen.height-142}px`;
    mainWalletContainer_sendPageII.style.height=`${screen.height-142}px`;
    //mainWallet_C_homePage_TCD
    mainWallet_C_homePage_TCD.style.height=`${screen.height-142-90}px`;
    //mainWallet_C_homePage_TC
    mainWallet_C_homePage_TC_WC.style.height=`${screen.height-142-90}px`;
    mainWallet_C_homePage_TC_HC.style.height=`${screen.height-142-90}px`;
    mainWallet_C_homePage_TC_BC.style.height=`${screen.height-142-90}px`;
    receiveSend_containerDiv.style.height=`${screen.height-142-90}px`;

    realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-90-28)/3}px`;
    realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-90-20)-((screen.height-90-20)/3)-50)-80}px`;
}


if(screen.width<330){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr";
    
}else if(screen.width>330 && screen.width<540){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";

}else if(screen.width>540 && screen.width<750){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";

}else if(screen.width>750 && screen.width<900){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";

}else if(screen.width>900){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
}


setInterval(()=>{

    if(sessionStorage.getItem('%width')===null || sessionStorage.getItem('%width') != screen.width){


        if(screen.width<330){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr";
            
        }else if(screen.width>330 && screen.width<540){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";
        
        }else if(screen.width>540 && screen.width<750){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";
        
        }else if(screen.width>750 && screen.width<900){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";
        
        }else if(screen.width>900){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
        }

        //SET WIDTH TO LSR
        sessionStorage.setItem('%width',screen.width);
        

    }

    if(sessionStorage.getItem('%height')===null || sessionStorage.getItem('%height') != screen.height){
           

        if(screen.height<=740){
            //mainWalletContainer_div
            mainWalletContainer_div.style.height=`${screen.height}px`;
            //mainWalletContainer
            mainWalletContainer_sendPage.style.height=`${screen.height}px`;
            mainWalletContainer_receivePage.style.height=`${screen.height}px`;
            mainWalletContainer_swapPage.style.height=`${screen.height}px`;
            mainWalletContainer_backupPage.style.height=`${screen.height}px`;
            mainWalletContainer_settingButton.style.height=`${screen.height}px`;
            mainWalletContainer_sendPageI.style.height=`${screen.height}px`;
            mainWalletContainer_sendPageII.style.height=`${screen.height}px`;
            //mainWallet_C_homePage_TCD
            mainWallet_C_homePage_TCD.style.height=`${screen.height-90}px`;
            //mainWallet_C_homePage_TC
            mainWallet_C_homePage_TC_WC.style.height=`${screen.height-90}px`;
            mainWallet_C_homePage_TC_HC.style.height=`${screen.height-90}px`;
            mainWallet_C_homePage_TC_BC.style.height=`${screen.height-90}px`;
            receiveSend_containerDiv.style.height=`${screen.height-90}px`;

            realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-90-28)/3}px`;
            realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-90-20)-((screen.height-90-20)/3)-50)-10}px`;
        }else{
            //mainWalletContainer_div
            mainWalletContainer_div.style.height=`${screen.height-142}px`;
            //mainWalletContainer
            mainWalletContainer_sendPage.style.height=`${screen.height-142}px`;
            mainWalletContainer_receivePage.style.height=`${screen.height-142}px`;
            mainWalletContainer_swapPage.style.height=`${screen.height-142}px`;
            mainWalletContainer_backupPage.style.height=`${screen.height-142}px`;
            mainWalletContainer_settingButton.style.height=`${screen.height-142}px`;
            mainWalletContainer_sendPageI.style.height=`${screen.height-142}px`;
            mainWalletContainer_sendPageII.style.height=`${screen.height-142}px`;
            //mainWallet_C_homePage_TCD
            mainWallet_C_homePage_TCD.style.height=`${screen.height-142-90}px`;
            //mainWallet_C_homePage_TC
            mainWallet_C_homePage_TC_WC.style.height=`${screen.height-142-90}px`;
            mainWallet_C_homePage_TC_HC.style.height=`${screen.height-142-90}px`;
            mainWallet_C_homePage_TC_BC.style.height=`${screen.height-142-90}px`;
            receiveSend_containerDiv.style.height=`${screen.height-142-90}px`;

            realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-90-28)/3}px`;
            realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-90-20)-((screen.height-90-20)/3)-50)-80}px`;
        } 

        
        //SET HEIGHT TO LSR
        sessionStorage.setItem('%height',screen.height);
    }

},100)




//swapPageSign
let swapPageSignI=document.querySelector('.swapPageSignI');
let swapPageSignII=document.querySelector('.swapPageSignII');
let swapPageSignIII=document.querySelector('.swapPageSignIII');
let swapPageSignIV=document.querySelector('.swapPageSignIV');
let swapPageSignV=document.querySelector('.swapPageSignV');
let swapPageSignVI=document.querySelector('.swapPageSignVI');
let swapPageSignVII=document.querySelector('.swapPageSignVII');
let swapPageSignVIII=document.querySelector('.swapPageSignVIII');





if(localStorage.getItem('currencyPrefix')===null){
    localStorage.setItem('currencyPrefix','USD')
    localStorage.setItem('currencySign','&#36')
}






setInterval(()=>{

    
    if(localStorage.getItem('currencyPrefix')==="USD"){

        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${(Number(localStorage.getItem('displayWalletAmount'))/80000).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${(Number(localStorage.getItem('displayWalletAmount'))/80000).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${(Number(localStorage.getItem('displayWalletAmount'))/80000).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${(Number(localStorage.getItem('displayWalletAmount'))/80000).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='block';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="EUR"){

        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('EUR'))).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('EUR'))).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('EUR'))).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('EUR'))).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number(localStorage.getItem('EUR'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='block';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="GBP"){
        
        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('GBP'))).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('GBP'))).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('GBP'))).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('GBP'))).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number(localStorage.getItem('GBP'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='block';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="NGN"){

        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('NGN'))).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('NGN'))).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('NGN'))).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('NGN'))).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number(localStorage.getItem('NGN'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='block';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="JPY"){

        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('JPY'))).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('JPY'))).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('JPY'))).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('JPY'))).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number(localStorage.getItem('JPY'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='block';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="CNT"){

        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('CNT'))).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('CNT'))).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('CNT'))).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('CNT'))).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number(localStorage.getItem('CNT'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='block';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="RS"){

        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('RS'))).toFixed(5)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('RS'))).toFixed(5)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('RS'))).toFixed(5)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('RS'))).toFixed(5)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number(localStorage.getItem('RS'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(3)} ${localStorage.getItem('currencyPrefix')}`
        }

        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='block';
        swapPageSignVIII.style.display='none';
        //End sub

    }else if(localStorage.getItem('currencyPrefix')==="BTC"){
        
        document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number( localStorage.getItem('BTC'))).toFixed(15)}`;

        document.querySelector('.totalAmount').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number( localStorage.getItem('BTC'))).toFixed(15)}`;

        document.querySelector('.wallet_CD_CRight_bottom').innerHTML=`${localStorage.getItem('currencySign')} ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number(localStorage.getItem('BTC'))).toFixed(15)}`;

        document.querySelector('.transactionAmount_CD_maxD_right').innerHTML=`Available: ${((Number(localStorage.getItem('displayWalletAmount'))/80000)/Number( localStorage.getItem('BTC'))).toFixed(15)} ${localStorage.getItem('currencyPrefix')}`;

        localStorage.setItem('AmountTransactionCoins',`${Number(document.querySelector('.transactionAmount_CD_I').value)*80000*Number( localStorage.getItem('BTC'))}`)

        if(document.querySelector('.transactionAmount_CD_I').value===''){
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`0.000 ${localStorage.getItem('currencyPrefix')}`;
        }else{
            document.querySelector('.transactionAmount_CD_DA').innerHTML=`${Number(document.querySelector('.transactionAmount_CD_I').value).toFixed(15)} ${localStorage.getItem('currencyPrefix')}`
        }


        //swapPageSign
        swapPageSignI.style.display='none';
        swapPageSignII.style.display='none';
        swapPageSignIII.style.display='none';
        swapPageSignIV.style.display='none';
        swapPageSignV.style.display='none';
        swapPageSignVI.style.display='none';
        swapPageSignVII.style.display='none';
        swapPageSignVIII.style.display='block';
        //End sub

    }







    //set setting currencyName
    if(document.querySelector('.currencyName').innerText != localStorage.getItem('currencyPrefix')){
        document.querySelector('.currencyName').innerText=localStorage.getItem('currencyPrefix');
    }

},100)







































































setInterval(()=>{
    let tapswapRandom=Math.round(Math.random()*100);
    let hamsterkonbatRandom=Math.round(Math.random()*100);
    let aquaprotocolRandom=Math.round(Math.random()*100);
    let blumRandom=Math.round(Math.random()*100);
    let memefiRandom=Math.round(Math.random()*100);
    let gemzcoinRandom=Math.round(Math.random()*100);
    let loscoinRandom=Math.round(Math.random()*100);
    let notcoinRandom=Math.round(Math.random()*100);
    let tigernetworkRandom=Math.round(Math.random()*100);
    let simpletapRandom=Math.round(Math.random()*100);
    let koloRandom=Math.round(Math.random()*100);
    let cashcoingameRandom=Math.round(Math.random()*100);
    let dotcoinRandom=Math.round(Math.random()*100);
    let bbqcoinRandom=Math.round(Math.random()*100);
    let cexoiRandom=Math.round(Math.random()*100);
    let seedcoinRandom=Math.round(Math.random()*100);
    let pocketrocketRandom=Math.round(Math.random()*100);
    let yescoinRandom=Math.round(Math.random()*100);
    let avagoldcoinRandom=Math.round(Math.random()*100);


    
    
    //TAPSWAP
    if(tapswapRandom<50){
        //TAPSWAP
        document.querySelector('.tapswap_stickReadSell').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadSell').style.backgroundColor='red';
        document.querySelector('.tapswap_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.tapswap_AmountSell').innerHTML=`&#36 0.000${tapswapRandom}`;
        document.querySelector('.tapswap_AmountSell').style.color='red';
        //
        document.querySelector('.tapswap_stickReadBuy').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.tapswap_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.tapswap_AmountBuy').innerHTML=`&#36 0.000${tapswapRandom}`;
        document.querySelector('.tapswap_AmountBuy').style.color='red';

    }else{
        //TAPSWAP
        document.querySelector('.tapswap_stickReadSell').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadSell').style.backgroundColor='green';
        document.querySelector('.tapswap_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.tapswap_AmountSell').innerHTML=`&#36 0.000${tapswapRandom}`;
        document.querySelector('.tapswap_AmountSell').style.color='green';
        //
        document.querySelector('.tapswap_stickReadBuy').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.tapswap_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.tapswap_AmountBuy').innerHTML=`&#36 0.000${tapswapRandom}`;
        document.querySelector('.tapswap_AmountBuy').style.color='green';

    }
    //HAMSTER KOMBAT 
    if(hamsterkonbatRandom<50){
        //HAMSTER KOMBAT 
        document.querySelector('.hamsterkonbat_stickReadSell').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadSell').style.backgroundColor='red';
        document.querySelector('.hamsterkonbat_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.hamsterkonbat_AmountSell').innerHTML=`&#36 0.000${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountSell').style.color='red';
        //
        document.querySelector('.hamsterkonbat_stickReadBuy').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.hamsterkonbat_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.hamsterkonbat_AmountBuy').innerHTML=`&#36 0.000${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountBuy').style.color='red';

    }else{
        //HAMSTER KOMBAT 
        document.querySelector('.hamsterkonbat_stickReadSell').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadSell').style.backgroundColor='green';
        document.querySelector('.hamsterkonbat_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.hamsterkonbat_AmountSell').innerHTML=`&#36 0.000${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountSell').style.color='green';
        //
        document.querySelector('.hamsterkonbat_stickReadBuy').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.hamsterkonbat_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.hamsterkonbat_AmountBuy').innerHTML=`&#36 0.000${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountBuy').style.color='green';

    }
    //AQUAPROTOCOL
    if(aquaprotocolRandom<50){
        //AQUAPROTOCOL 
        document.querySelector('.aquaprotocol_stickReadSell').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadSell').style.backgroundColor='red';
        document.querySelector('.aquaprotocol_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.aquaprotocol_AmountSell').innerHTML=`&#36 0.000${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountSell').style.color='red';
        //
        document.querySelector('.aquaprotocol_stickReadBuy').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.aquaprotocol_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.aquaprotocol_AmountBuy').innerHTML=`&#36 0.000${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountBuy').style.color='red';
    }else{
        //AQUAPROTOCOL 
        document.querySelector('.aquaprotocol_stickReadSell').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadSell').style.backgroundColor='green';
        document.querySelector('.aquaprotocol_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.aquaprotocol_AmountSell').innerHTML=`&#36 0.000${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountSell').style.color='green';
        //
        document.querySelector('.aquaprotocol_stickReadBuy').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.aquaprotocol_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.aquaprotocol_AmountBuy').innerHTML=`&#36 0.000${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountBuy').style.color='green';

    }
    //BLUM
    if(blumRandom<50){
        //BLUM
        document.querySelector('.blum_stickReadSell').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadSell').style.backgroundColor='red';
        document.querySelector('.blum_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.blum_AmountSell').innerHTML=`&#36 0.000${blumRandom}`;
        document.querySelector('.blum_AmountSell').style.color='red';
        //
        document.querySelector('.blum_stickReadBuy').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.blum_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.blum_AmountBuy').innerHTML=`&#36 0.000${blumRandom}`;
        document.querySelector('.blum_AmountBuy').style.color='red';

    }else{
        //BLUM
        document.querySelector('.blum_stickReadSell').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadSell').style.backgroundColor='green';
        document.querySelector('.blum_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.blum_AmountSell').innerHTML=`&#36 0.000${blumRandom}`;
        document.querySelector('.blum_AmountSell').style.color='green';
        //
        document.querySelector('.blum_stickReadBuy').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.blum_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.blum_AmountBuy').innerHTML=`&#36 0.000${blumRandom}`;
        document.querySelector('.blum_AmountBuy').style.color='green';

    }
    //MEMEFI
    if(memefiRandom<50){
        //MEMEFI
        document.querySelector('.memefi_stickReadSell').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadSell').style.backgroundColor='red';
        document.querySelector('.memefi_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.memefi_AmountSell').innerHTML=`&#36 0.000${memefiRandom}`;
        document.querySelector('.memefi_AmountSell').style.color='red';
        //
        document.querySelector('.memefi_stickReadBuy').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.memefi_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.memefi_AmountBuy').innerHTML=`&#36 0.000${memefiRandom}`;
        document.querySelector('.memefi_AmountBuy').style.color='red';

    }else{
        //MEMEFI
        document.querySelector('.memefi_stickReadSell').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadSell').style.backgroundColor='green';
        document.querySelector('.memefi_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.memefi_AmountSell').innerHTML=`&#36 0.000${memefiRandom}`;
        document.querySelector('.memefi_AmountSell').style.color='green';
        //
        document.querySelector('.memefi_stickReadBuy').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.memefi_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.memefi_AmountBuy').innerHTML=`&#36 0.000${memefiRandom}`;
        document.querySelector('.memefi_AmountBuy').style.color='green';

    }



    //gemzcoin
    if(gemzcoinRandom<50){
        //gemzcoin
        document.querySelector('.gemzcoin_stickReadSell').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.gemzcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.gemzcoin_AmountSell').innerHTML=`&#36 0.000${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountSell').style.color='red';
        //
        document.querySelector('.gemzcoin_stickReadBuy').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.gemzcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.gemzcoin_AmountBuy').innerHTML=`&#36 0.000${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountBuy').style.color='red';

    }else{
        //gemzcoin
        document.querySelector('.gemzcoin_stickReadSell').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.gemzcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.gemzcoin_AmountSell').innerHTML=`&#36 0.000${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountSell').style.color='green';
        //
        document.querySelector('.gemzcoin_stickReadBuy').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.gemzcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.gemzcoin_AmountBuy').innerHTML=`&#36 0.000${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountBuy').style.color='green';

    }


    //loscoin
    if(loscoinRandom<50){
        //loscoin
        document.querySelector('.loscoin_stickReadSell').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.loscoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.loscoin_AmountSell').innerHTML=`&#36 0.000${loscoinRandom}`;
        document.querySelector('.loscoin_AmountSell').style.color='red';
        //
        document.querySelector('.loscoin_stickReadBuy').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.loscoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.loscoin_AmountBuy').innerHTML=`&#36 0.000${loscoinRandom}`;
        document.querySelector('.loscoin_AmountBuy').style.color='red';

    }else{
        //loscoin
        document.querySelector('.loscoin_stickReadSell').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.loscoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.loscoin_AmountSell').innerHTML=`&#36 0.000${loscoinRandom}`;
        document.querySelector('.loscoin_AmountSell').style.color='green';
        //
        document.querySelector('.loscoin_stickReadBuy').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.loscoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.loscoin_AmountBuy').innerHTML=`&#36 0.000${loscoinRandom}`;
        document.querySelector('.loscoin_AmountBuy').style.color='green';

    }

    //notcoin
    if(notcoinRandom<50){
        //notcoin
        document.querySelector('.notcoin_stickReadSell').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.notcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.notcoin_AmountSell').innerHTML=`&#36 0.000${notcoinRandom}`;
        document.querySelector('.notcoin_AmountSell').style.color='red';
        //
        document.querySelector('.notcoin_stickReadBuy').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.notcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.notcoin_AmountBuy').innerHTML=`&#36 0.000${notcoinRandom}`;
        document.querySelector('.notcoin_AmountBuy').style.color='red';

    }else{
        //notcoin
        document.querySelector('.notcoin_stickReadSell').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.notcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.notcoin_AmountSell').innerHTML=`&#36 0.000${notcoinRandom}`;
        document.querySelector('.notcoin_AmountSell').style.color='green';
        //
        document.querySelector('.notcoin_stickReadBuy').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.notcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.notcoin_AmountBuy').innerHTML=`&#36 0.000${notcoinRandom}`;
        document.querySelector('.notcoin_AmountBuy').style.color='green';

    }

    //tigernetwork
    if(tigernetworkRandom<50){
        //tigernetwork
        document.querySelector('.tigernetwork_stickReadSell').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadSell').style.backgroundColor='red';
        document.querySelector('.tigernetwork_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.tigernetwork_AmountSell').innerHTML=`&#36 0.000${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountSell').style.color='red';
        //
        document.querySelector('.tigernetwork_stickReadBuy').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.tigernetwork_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.tigernetwork_AmountBuy').innerHTML=`&#36 0.000${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountBuy').style.color='red';

    }else{
        //tigernetwork
        document.querySelector('.tigernetwork_stickReadSell').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadSell').style.backgroundColor='green';
        document.querySelector('.tigernetwork_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.tigernetwork_AmountSell').innerHTML=`&#36 0.000${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountSell').style.color='green';
        //
        document.querySelector('.tigernetwork_stickReadBuy').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.tigernetwork_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.tigernetwork_AmountBuy').innerHTML=`&#36 0.000${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountBuy').style.color='green';

    }

    //simpletap
    if(simpletapRandom<50){
        //simpletap
        document.querySelector('.simpletap_stickReadSell').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadSell').style.backgroundColor='red';
        document.querySelector('.simpletap_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.simpletap_AmountSell').innerHTML=`&#36 0.000${simpletapRandom}`;
        document.querySelector('.simpletap_AmountSell').style.color='red';
        //
        document.querySelector('.simpletap_stickReadBuy').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.simpletap_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.simpletap_AmountBuy').innerHTML=`&#36 0.000${simpletapRandom}`;
        document.querySelector('.simpletap_AmountBuy').style.color='red';

    }else{
        //simpletap
        document.querySelector('.simpletap_stickReadSell').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadSell').style.backgroundColor='green';
        document.querySelector('.simpletap_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.simpletap_AmountSell').innerHTML=`&#36 0.000${simpletapRandom}`;
        document.querySelector('.simpletap_AmountSell').style.color='green';
        //
        document.querySelector('.simpletap_stickReadBuy').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.simpletap_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.simpletap_AmountBuy').innerHTML=`&#36 0.000${simpletapRandom}`;
        document.querySelector('.simpletap_AmountBuy').style.color='green';

    }

    //kolo
    if(koloRandom<50){
        //kolo
        document.querySelector('.kolo_stickReadSell').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadSell').style.backgroundColor='red';
        document.querySelector('.kolo_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.kolo_AmountSell').innerHTML=`&#36 0.000${koloRandom}`;
        document.querySelector('.kolo_AmountSell').style.color='red';
        //
        document.querySelector('.kolo_stickReadBuy').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.kolo_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.kolo_AmountBuy').innerHTML=`&#36 0.000${koloRandom}`;
        document.querySelector('.kolo_AmountBuy').style.color='red';

    }else{
        //kolo
        document.querySelector('.kolo_stickReadSell').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadSell').style.backgroundColor='green';
        document.querySelector('.kolo_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.kolo_AmountSell').innerHTML=`&#36 0.000${koloRandom}`;
        document.querySelector('.kolo_AmountSell').style.color='green';
        //
        document.querySelector('.kolo_stickReadBuy').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.kolo_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.kolo_AmountBuy').innerHTML=`&#36 0.000${koloRandom}`;
        document.querySelector('.kolo_AmountBuy').style.color='green';

    }

    //cashcoingame
    if(cashcoingameRandom<50){
        //cashcoingame
        document.querySelector('.cashcoingame_stickReadSell').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadSell').style.backgroundColor='red';
        document.querySelector('.cashcoingame_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.cashcoingame_AmountSell').innerHTML=`&#36 0.000${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountSell').style.color='red';
        //
        document.querySelector('.cashcoingame_stickReadBuy').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.cashcoingame_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.cashcoingame_AmountBuy').innerHTML=`&#36 0.000${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountBuy').style.color='red';

    }else{
        //cashcoingame
        document.querySelector('.cashcoingame_stickReadSell').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadSell').style.backgroundColor='green';
        document.querySelector('.cashcoingame_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.cashcoingame_AmountSell').innerHTML=`&#36 0.000${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountSell').style.color='green';
        //
        document.querySelector('.cashcoingame_stickReadBuy').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.cashcoingame_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.cashcoingame_AmountBuy').innerHTML=`&#36 0.000${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountBuy').style.color='green';

    }

    //dotcoin
    if(dotcoinRandom<50){
        //dotcoin
        document.querySelector('.dotcoin_stickReadSell').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.dotcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.dotcoin_AmountSell').innerHTML=`&#36 0.000${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountSell').style.color='red';
        //
        document.querySelector('.dotcoin_stickReadBuy').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.dotcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.dotcoin_AmountBuy').innerHTML=`&#36 0.000${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountBuy').style.color='red';

    }else{
        //dotcoin
        document.querySelector('.dotcoin_stickReadSell').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.dotcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.dotcoin_AmountSell').innerHTML=`&#36 0.000${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountSell').style.color='green';
        //
        document.querySelector('.dotcoin_stickReadBuy').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.dotcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.dotcoin_AmountBuy').innerHTML=`&#36 0.000${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountBuy').style.color='green';

    }

    //bbqcoin
    if(bbqcoinRandom<50){
        //bbqcoin
        document.querySelector('.bbqcoin_stickReadSell').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.bbqcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.bbqcoin_AmountSell').innerHTML=`&#36 0.000${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountSell').style.color='red';
        //
        document.querySelector('.bbqcoin_stickReadBuy').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.bbqcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.bbqcoin_AmountBuy').innerHTML=`&#36 0.000${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountBuy').style.color='red';

    }else{
        //bbqcoin
        document.querySelector('.bbqcoin_stickReadSell').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.bbqcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.bbqcoin_AmountSell').innerHTML=`&#36 0.000${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountSell').style.color='green';
        //
        document.querySelector('.bbqcoin_stickReadBuy').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.bbqcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.bbqcoin_AmountBuy').innerHTML=`&#36 0.000${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountBuy').style.color='green';

    }

    //cexoi
    if(cexoiRandom<50){
        //cexoi
        document.querySelector('.cexoi_stickReadSell').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadSell').style.backgroundColor='red';
        document.querySelector('.cexoi_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.cexoi_AmountSell').innerHTML=`&#36 0.000${cexoiRandom}`;
        document.querySelector('.cexoi_AmountSell').style.color='red';
        //
        document.querySelector('.cexoi_stickReadBuy').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.cexoi_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.cexoi_AmountBuy').innerHTML=`&#36 0.000${cexoiRandom}`;
        document.querySelector('.cexoi_AmountBuy').style.color='red';

    }else{
        //cexoi
        document.querySelector('.cexoi_stickReadSell').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadSell').style.backgroundColor='green';
        document.querySelector('.cexoi_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.cexoi_AmountSell').innerHTML=`&#36 0.000${cexoiRandom}`;
        document.querySelector('.cexoi_AmountSell').style.color='green';
        //
        document.querySelector('.cexoi_stickReadBuy').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.cexoi_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.cexoi_AmountBuy').innerHTML=`&#36 0.000${cexoiRandom}`;
        document.querySelector('.cexoi_AmountBuy').style.color='green';

    }

    //seedcoin
    if(seedcoinRandom<50){
        //seedcoin
        document.querySelector('.seedcoin_stickReadSell').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.seedcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.seedcoin_AmountSell').innerHTML=`&#36 0.000${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountSell').style.color='red';
        //
        document.querySelector('.seedcoin_stickReadBuy').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.seedcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.seedcoin_AmountBuy').innerHTML=`&#36 0.000${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountBuy').style.color='red';

    }else{
        //seedcoin
        document.querySelector('.seedcoin_stickReadSell').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.seedcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.seedcoin_AmountSell').innerHTML=`&#36 0.000${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountSell').style.color='green';
        //
        document.querySelector('.seedcoin_stickReadBuy').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.seedcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.seedcoin_AmountBuy').innerHTML=`&#36 0.000${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountBuy').style.color='green';

    }

    //pocketrocket
    if(pocketrocketRandom<50){
        //pocketrocket
        document.querySelector('.pocketrocket_stickReadSell').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadSell').style.backgroundColor='red';
        document.querySelector('.pocketrocket_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.pocketrocket_AmountSell').innerHTML=`&#36 0.000${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountSell').style.color='red';
        //
        document.querySelector('.pocketrocket_stickReadBuy').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.pocketrocket_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.pocketrocket_AmountBuy').innerHTML=`&#36 0.000${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountBuy').style.color='red';

    }else{
        //pocketrocket
        document.querySelector('.pocketrocket_stickReadSell').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadSell').style.backgroundColor='green';
        document.querySelector('.pocketrocket_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.pocketrocket_AmountSell').innerHTML=`&#36 0.000${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountSell').style.color='green';
        //
        document.querySelector('.pocketrocket_stickReadBuy').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.pocketrocket_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.pocketrocket_AmountBuy').innerHTML=`&#36 0.000${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountBuy').style.color='green';

    }

    //yescoin
    if(yescoinRandom<50){
        //yescoin
        document.querySelector('.yescoin_stickReadSell').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.yescoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.yescoin_AmountSell').innerHTML=`&#36 0.000${yescoinRandom}`;
        document.querySelector('.yescoin_AmountSell').style.color='red';
        //
        document.querySelector('.yescoin_stickReadBuy').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.yescoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.yescoin_AmountBuy').innerHTML=`&#36 0.000${yescoinRandom}`;
        document.querySelector('.yescoin_AmountBuy').style.color='red';

    }else{
        //yescoin
        document.querySelector('.yescoin_stickReadSell').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.yescoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.yescoin_AmountSell').innerHTML=`&#36 0.000${yescoinRandom}`;
        document.querySelector('.yescoin_AmountSell').style.color='green';
        //
        document.querySelector('.yescoin_stickReadBuy').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.yescoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.yescoin_AmountBuy').innerHTML=`&#36 0.000${yescoinRandom}`;
        document.querySelector('.yescoin_AmountBuy').style.color='green';

    }

    //avagoldcoin
    if(avagoldcoinRandom<50){
        //avagoldcoin
        document.querySelector('.avagoldcoin_stickReadSell').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.avagoldcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.avagoldcoin_AmountSell').innerHTML=`&#36 0.000${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountSell').style.color='red';
        //
        document.querySelector('.avagoldcoin_stickReadBuy').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.avagoldcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.avagoldcoin_AmountBuy').innerHTML=`&#36 0.000${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountBuy').style.color='red';

    }else{
        //avagoldcoin
        document.querySelector('.avagoldcoin_stickReadSell').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.avagoldcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.avagoldcoin_AmountSell').innerHTML=`&#36 0.000${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountSell').style.color='green';
        //
        document.querySelector('.avagoldcoin_stickReadBuy').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.avagoldcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.avagoldcoin_AmountBuy').innerHTML=`&#36 0.000${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountBuy').style.color='green';

    }
    

},10000)





















//IF THE VALUE ARE === TO NULL
localStorage.getItem('displayTapswapBuy')===null?localStorage.setItem('displayTapswapBuy','none'):'Escape';
localStorage.getItem('displayHamsterkonbatBuy')===null?localStorage.setItem('displayHamsterkonbatBuy','none'):'Escape';
localStorage.getItem('displayAquaprotocolBuy')===null?localStorage.setItem('displayAquaprotocolBuy','none'):'Escape';
localStorage.getItem('displayBlumBuy')===null?localStorage.setItem('displayBlumBuy','flex'):'Escape';
localStorage.getItem('displayMemefiBuy')===null?localStorage.setItem('displayMemefiBuy','flex'):'Escape';
localStorage.getItem('displaygemzcoinBuy')===null?localStorage.setItem('displaygemzcoinBuy','flex'):'Escape';
localStorage.getItem('displayloscoinBuy')===null?localStorage.setItem('displayloscoinBuy','flex'):'Escape';
localStorage.getItem('displaynotcoinBuy')===null?localStorage.setItem('displaynotcoinBuy','flex'):'Escape';
localStorage.getItem('displaytigernetworkBuy')===null?localStorage.setItem('displaytigernetworkBuy','flex'):'Escape';
localStorage.getItem('displaysimpletapBuy')===null?localStorage.setItem('displaysimpletapBuy','flex'):'Escape';
localStorage.getItem('displaykoloBuy')===null?localStorage.setItem('displaykoloBuy','flex'):'Escape';
localStorage.getItem('displaycashcoingameBuy')===null?localStorage.setItem('displaycashcoingameBuy','flex'):'Escape';
localStorage.getItem('displaydotcoinBuy')===null?localStorage.setItem('displaydotcoinBuy','flex'):'Escape';
localStorage.getItem('displaybbqcoinBuy')===null?localStorage.setItem('displaybbqcoinBuy','flex'):'Escape';
localStorage.getItem('displaycexoiBuy')===null?localStorage.setItem('displaycexoiBuy','flex'):'Escape';
localStorage.getItem('displayseedcoinBuy')===null?localStorage.setItem('displayseedcoinBuy','flex'):'Escape';
localStorage.getItem('displaypocketrocketBuy')===null?localStorage.setItem('displaypocketrocketBuy','flex'):'Escape';
localStorage.getItem('displayyescoinBuy')===null?localStorage.setItem('displayyescoinBuy','flex'):'Escape';
localStorage.getItem('displayavagoldcoinBuy')===null?localStorage.setItem('displayavagoldcoinBuy','flex'):'Escape';




//IF THE VALUE ARE === TO NULL
localStorage.getItem('displayTapswapSell')===null?localStorage.setItem('displayTapswapSell','flex'):'Escape';
localStorage.getItem('displayHamsterkonbatSell')===null?localStorage.setItem('displayHamsterkonbatSell','flex'):'Escape';
localStorage.getItem('displayAquaprotocolSell')===null?localStorage.setItem('displayAquaprotocolSell','flex'):'Escape';
localStorage.getItem('displayBlumSell')===null?localStorage.setItem('displayBlumSell','none'):'Escape';
localStorage.getItem('displayMemefiSell')===null?localStorage.setItem('displayMemefiSell','none'):'Escape';
localStorage.getItem('displaygemzcoinSell')===null?localStorage.setItem('displaygemzcoinSell','none'):'Escape';
localStorage.getItem('displayloscoinSell')===null?localStorage.setItem('displayloscoinSell','none'):'Escape';
localStorage.getItem('displaynotcoinSell')===null?localStorage.setItem('displaynotcoinSell','none'):'Escape';
localStorage.getItem('displaytigernetworkSell')===null?localStorage.setItem('displaytigernetworkSell','none'):'Escape';
localStorage.getItem('displaysimpletapSell')===null?localStorage.setItem('displaysimpletapSell','none'):'Escape';
localStorage.getItem('displaykoloSell')===null?localStorage.setItem('displaykoloSell','none'):'Escape';
localStorage.getItem('displaycashcoingameSell')===null?localStorage.setItem('displaycashcoingameSell','none'):'Escape';
localStorage.getItem('displaydotcoinSell')===null?localStorage.setItem('displaydotcoinSell','none'):'Escape';
localStorage.getItem('displaybbqcoinSell')===null?localStorage.setItem('displaybbqcoinSell','none'):'Escape';
localStorage.getItem('displaycexoiSell')===null?localStorage.setItem('displaycexoiSell','none'):'Escape';
localStorage.getItem('displayseedcoinSell')===null?localStorage.setItem('displayseedcoinSell','none'):'Escape';
localStorage.getItem('displaypocketrocketSell')===null?localStorage.setItem('displaypocketrocketSell','none'):'Escape';
localStorage.getItem('displayyescoinSell')===null?localStorage.setItem('displayyescoinSell','none'):'Escape';
localStorage.getItem('displayavagoldcoinSell')===null?localStorage.setItem('displayavagoldcoinSell','none'):'Escape';











//Buy
let tapswap_ContainerBuy=document.querySelector('.tapswap_ContainerBuy');
let hamsterkonbat_ContainerBuy=document.querySelector('.hamsterkonbat_ContainerBuy');
let aquaprotocol_ContainerBuy=document.querySelector('.aquaprotocol_ContainerBuy');
let blum_ContainerBuy=document.querySelector('.blum_ContainerBuy');
let memefi_ContainerBuy=document.querySelector('.memefi_ContainerBuy');
let gemzcoin_ContainerBuy=document.querySelector('.gemzcoin_ContainerBuy');
let loscoin_ContainerBuy=document.querySelector('.loscoin_ContainerBuy');
let notcoin_ContainerBuy=document.querySelector('.notcoin_ContainerBuy');
let tigernetwork_ContainerBuy=document.querySelector('.tigernetwork_ContainerBuy');
let simpletap_ContainerBuy=document.querySelector('.simpletap_ContainerBuy');
let kolo_ContainerBuy=document.querySelector('.kolo_ContainerBuy');
let cashcoingame_ContainerBuy=document.querySelector('.cashcoingame_ContainerBuy');
let dotcoin_ContainerBuy=document.querySelector('.dotcoin_ContainerBuy');
let bbqcoin_ContainerBuy=document.querySelector('.bbqcoin_ContainerBuy');
let cexoi_ContainerBuy=document.querySelector('.cexoi_ContainerBuy');
let seedcoin_ContainerBuy=document.querySelector('.seedcoin_ContainerBuy');
let pocketrocket_ContainerBuy=document.querySelector('.pocketrocket_ContainerBuy');
let yescoin_ContainerBuy=document.querySelector('.yescoin_ContainerBuy');
let avagoldcoin_ContainerBuy=document.querySelector('.avagoldcoin_ContainerBuy');


//Sell
let tapswap_ContainerSell=document.querySelector('.tapswap_ContainerSell');
let hamsterkonbat_ContainerSell=document.querySelector('.hamsterkonbat_ContainerSell');
let aquaprotocol_ContainerSell=document.querySelector('.aquaprotocol_ContainerSell');
let blum_ContainerSell=document.querySelector('.blum_ContainerSell');
let memefi_ContainerSell=document.querySelector('.memefi_ContainerSell');

let gemzcoin_ContainerSell=document.querySelector('.gemzcoin_ContainerSell');
let loscoin_ContainerSell=document.querySelector('.loscoin_ContainerSell');
let notcoin_ContainerSell=document.querySelector('.notcoin_ContainerSell');
let tigernetwork_ContainerSell=document.querySelector('.tigernetwork_ContainerSell');
let simpletap_ContainerSell=document.querySelector('.simpletap_ContainerSell');
let kolo_ContainerSell=document.querySelector('.kolo_ContainerSell');
let cashcoingame_ContainerSell=document.querySelector('.cashcoingame_ContainerSell');
let dotcoin_ContainerSell=document.querySelector('.dotcoin_ContainerSell');
let bbqcoin_ContainerSell=document.querySelector('.bbqcoin_ContainerSell');
let cexoi_ContainerSell=document.querySelector('.cexoi_ContainerSell');
let seedcoin_ContainerSell=document.querySelector('.seedcoin_ContainerSell');
let pocketrocket_ContainerSell=document.querySelector('.pocketrocket_ContainerSell');
let yescoin_ContainerSell=document.querySelector('.yescoin_ContainerSell');
let avagoldcoin_ContainerSell=document.querySelector('.avagoldcoin_ContainerSell');


setInterval(()=>{
    
    
    //Buy
    tapswap_ContainerBuy.style.display=localStorage.getItem('displayTapswapBuy');
    hamsterkonbat_ContainerBuy.style.display=localStorage.getItem('displayHamsterkonbatBuy');
    aquaprotocol_ContainerBuy.style.display=localStorage.getItem('displayAquaprotocolBuy');
    blum_ContainerBuy.style.display=localStorage.getItem('displayBlumBuy');
    memefi_ContainerBuy.style.display=localStorage.getItem('displayMemefiBuy');
    gemzcoin_ContainerBuy.style.display=localStorage.getItem('displaygemzcoinBuy');
    loscoin_ContainerBuy.style.display=localStorage.getItem('displayloscoinBuy');
    notcoin_ContainerBuy.style.display=localStorage.getItem('displaynotcoinBuy');
    tigernetwork_ContainerBuy.style.display=localStorage.getItem('displaytigernetworkBuy');
    simpletap_ContainerBuy.style.display=localStorage.getItem('displaysimpletapBuy');
    kolo_ContainerBuy.style.display=localStorage.getItem('displaykoloBuy');
    cashcoingame_ContainerBuy.style.display=localStorage.getItem('displaycashcoingameBuy');
    dotcoin_ContainerBuy.style.display=localStorage.getItem('displaydotcoinBuy');
    bbqcoin_ContainerBuy.style.display=localStorage.getItem('displaybbqcoinBuy');
    cexoi_ContainerBuy.style.display=localStorage.getItem('displaycexoiBuy');
    seedcoin_ContainerBuy.style.display=localStorage.getItem('displayseedcoinBuy');
    pocketrocket_ContainerBuy.style.display=localStorage.getItem('displaypocketrocketBuy');
    yescoin_ContainerBuy.style.display=localStorage.getItem('displayyescoinBuy');
    avagoldcoin_ContainerBuy.style.display=localStorage.getItem('displayavagoldcoinBuy');


    //Sell
    tapswap_ContainerSell.style.display=localStorage.getItem('displayTapswapSell');
    hamsterkonbat_ContainerSell.style.display=localStorage.getItem('displayHamsterkonbatSell');
    aquaprotocol_ContainerSell.style.display=localStorage.getItem('displayAquaprotocolSell');
    blum_ContainerSell.style.display=localStorage.getItem('displayBlumSell');
    memefi_ContainerSell.style.display=localStorage.getItem('displayMemefiSell');
    gemzcoin_ContainerSell.style.display=localStorage.getItem('displaygemzcoinSell');
    loscoin_ContainerSell.style.display=localStorage.getItem('displayloscoinSell');
    notcoin_ContainerSell.style.display=localStorage.getItem('displaynotcoinSell');
    tigernetwork_ContainerSell.style.display=localStorage.getItem('displaytigernetworkSell');
    simpletap_ContainerSell.style.display=localStorage.getItem('displaysimpletapSell');
    kolo_ContainerSell.style.display=localStorage.getItem('displaykoloSell');
    cashcoingame_ContainerSell.style.display=localStorage.getItem('displaycashcoingameSell');
    dotcoin_ContainerSell.style.display=localStorage.getItem('displaydotcoinSell');
    bbqcoin_ContainerSell.style.display=localStorage.getItem('displaybbqcoinSell');
    cexoi_ContainerSell.style.display=localStorage.getItem('displaycexoiSell');
    seedcoin_ContainerSell.style.display=localStorage.getItem('displayseedcoinSell');
    pocketrocket_ContainerSell.style.display=localStorage.getItem('displaypocketrocketSell');
    yescoin_ContainerSell.style.display=localStorage.getItem('displayyescoinSell');
    avagoldcoin_ContainerSell.style.display=localStorage.getItem('displayavagoldcoinSell');

    


},100)

//Buy
const x2BottomContainerLeft_buy=document.querySelectorAll('.x2BottomContainerLeft_buy');
x2BottomContainerLeft_buy.forEach((e)=>{
    e.addEventListener('click',()=>{
        let coinsName_dataDashed=e.dataset.id;

        let AmountBuy=document.querySelector(`.${coinsName_dataDashed}_AmountBuy`).innerText;
        let AmountBuyConvertToCoins=(Number(AmountBuy.slice(1,AmountBuy.length))*80000).toFixed(0);
        
        
        
        if(Number(localStorage.getItem('displayWalletAmount'))>Number(AmountBuyConvertToCoins)){
            let getItem=Number(localStorage.getItem('displayWalletAmount'));
            localStorage.setItem('displayWalletAmount',getItem-Number(AmountBuyConvertToCoins))



            if(coinsName_dataDashed==='tapswap'){
                localStorage.setItem('displayTapswapBuy','none')
                localStorage.setItem('displayTapswapSell','flex')
            }else if(coinsName_dataDashed==='hamsterkonbat'){
                localStorage.setItem('displayHamsterkonbatBuy','none')
                localStorage.setItem('displayHamsterkonbatSell','flex')
            }else if(coinsName_dataDashed==='aquaprotocol'){
                localStorage.setItem('displayAquaprotocolBuy','none')
                localStorage.setItem('displayAquaprotocolSell','flex')
            }else if(coinsName_dataDashed==='blum'){
                localStorage.setItem('displayBlumBuy','none')
                localStorage.setItem('displayBlumSell','flex')
            }else if(coinsName_dataDashed==='memefi'){
                localStorage.setItem('displayMemefiBuy','none')
                localStorage.setItem('displayMemefiSell','flex')
            }else if(coinsName_dataDashed==='gemzcoin'){
                localStorage.setItem('displaygemzcoinBuy','none')
                localStorage.setItem('displaygemzcoinSell','flex')
            }else if(coinsName_dataDashed==='loscoin'){
                localStorage.setItem('displayloscoinBuy','none')
                localStorage.setItem('displayloscoinSell','flex')
            }else if(coinsName_dataDashed==='notcoin'){
                localStorage.setItem('displaynotcoinBuy','none')
                localStorage.setItem('displaynotcoinSell','flex')
            }else if(coinsName_dataDashed==='tigernetwork'){
                localStorage.setItem('displaytigernetworkBuy','none')
                localStorage.setItem('displaytigernetworkSell','flex')
            }else if(coinsName_dataDashed==='simpletap'){
                localStorage.setItem('displaysimpletapBuy','none')
                localStorage.setItem('displaysimpletapSell','flex')
            }else if(coinsName_dataDashed==='kolo'){
                localStorage.setItem('displaykoloBuy','none')
                localStorage.setItem('displaykoloSell','flex')
            }else if(coinsName_dataDashed==='cashcoingame'){
                localStorage.setItem('displaycashcoingameBuy','none')
                localStorage.setItem('displaycashcoingameSell','flex')
            }else if(coinsName_dataDashed==='dotcoin'){
                localStorage.setItem('displaydotcoinBuy','none')
                localStorage.setItem('displaydotcoinSell','flex')
            }else if(coinsName_dataDashed==='bbqcoin'){
                localStorage.setItem('displaybbqcoinBuy','none')
                localStorage.setItem('displaybbqcoinSell','flex')
            }else if(coinsName_dataDashed==='cexoi'){
                localStorage.setItem('displaycexoiBuy','none')
                localStorage.setItem('displaycexoiSell','flex')
            }else if(coinsName_dataDashed==='seedcoin'){
                localStorage.setItem('displayseedcoinBuy','none')
                localStorage.setItem('displayseedcoinSell','flex')
            }else if(coinsName_dataDashed==='pocketrocket'){
                localStorage.setItem('displaypocketrocketBuy','none')
                localStorage.setItem('displaypocketrocketSell','flex')
            }else if(coinsName_dataDashed==='yescoin'){
                localStorage.setItem('displayyescoinBuy','none')
                localStorage.setItem('displayyescoinSell','flex')
            }else if(coinsName_dataDashed==='avagoldcoin'){
                localStorage.setItem('displayavagoldcoinBuy','none')
                localStorage.setItem('displayavagoldcoinSell','flex')
            }
    

        }else{
            document.querySelector('.displayMessage').style.display='block';
            document.querySelector('.displayMessage').innerText='insufficient balance';
            setTimeout(()=>{
                document.querySelector('.displayMessage').style.display='none';
            },1000)
        }

        

        
    })
})



//Sell
const x2BottomContainerLeft_sell=document.querySelectorAll('.x2BottomContainerLeft_sell');
x2BottomContainerLeft_sell.forEach((e)=>{
    e.addEventListener('click',()=>{

        let coinsName_dataDashed=e.dataset.id;
        let AmountSell=document.querySelector(`.${coinsName_dataDashed}_AmountSell`).innerText;
        let AmountSellConvertToCoins=(Number(AmountSell.slice(1,AmountSell.length))*80000).toFixed(0);

        


        let getItem=Number(localStorage.getItem('displayWalletAmount'));
        localStorage.setItem('displayWalletAmount',getItem+Number(AmountSellConvertToCoins))
        

        if(coinsName_dataDashed==='tapswap'){
            localStorage.setItem('displayTapswapBuy','flex')
            localStorage.setItem('displayTapswapSell','none')
        }else if(coinsName_dataDashed==='hamsterkonbat'){
            localStorage.setItem('displayHamsterkonbatBuy','flex')
            localStorage.setItem('displayHamsterkonbatSell','none')
        }else if(coinsName_dataDashed==='aquaprotocol'){
            localStorage.setItem('displayAquaprotocolBuy','flex')
            localStorage.setItem('displayAquaprotocolSell','none')
        }else if(coinsName_dataDashed==='blum'){
            localStorage.setItem('displayBlumBuy','flex')
            localStorage.setItem('displayBlumSell','none')
        }else if(coinsName_dataDashed==='memefi'){
            localStorage.setItem('displayMemefiBuy','flex')
            localStorage.setItem('displayMemefiSell','none')
        }else if(coinsName_dataDashed==='gemzcoin'){
            localStorage.setItem('displaygemzcoinBuy','flex')
            localStorage.setItem('displaygemzcoinSell','none')
        }else if(coinsName_dataDashed==='loscoin'){
            localStorage.setItem('displayloscoinBuy','flex')
            localStorage.setItem('displayloscoinSell','none')
        }else if(coinsName_dataDashed==='notcoin'){
            localStorage.setItem('displaynotcoinBuy','flex')
            localStorage.setItem('displaynotcoinSell','none')
        }else if(coinsName_dataDashed==='tigernetwork'){
            localStorage.setItem('displaytigernetworkBuy','flex')
            localStorage.setItem('displaytigernetworkSell','none')
        }else if(coinsName_dataDashed==='simpletap'){
            localStorage.setItem('displaysimpletapBuy','flex')
            localStorage.setItem('displaysimpletapSell','none')
        }else if(coinsName_dataDashed==='kolo'){
            localStorage.setItem('displaykoloBuy','flex')
            localStorage.setItem('displaykoloSell','none')
        }else if(coinsName_dataDashed==='cashcoingame'){
            localStorage.setItem('displaycashcoingameBuy','flex')
            localStorage.setItem('displaycashcoingameSell','none')
        }else if(coinsName_dataDashed==='dotcoin'){
            localStorage.setItem('displaydotcoinBuy','flex')
            localStorage.setItem('displaydotcoinSell','none')
        }else if(coinsName_dataDashed==='bbqcoin'){
            localStorage.setItem('displaybbqcoinBuy','flex')
            localStorage.setItem('displaybbqcoinSell','none')
        }else if(coinsName_dataDashed==='cexoi'){
            localStorage.setItem('displaycexoiBuy','flex')
            localStorage.setItem('displaycexoiSell','none')
        }else if(coinsName_dataDashed==='seedcoin'){
            localStorage.setItem('displayseedcoinBuy','flex')
            localStorage.setItem('displayseedcoinSell','none')
        }else if(coinsName_dataDashed==='pocketrocket'){
            localStorage.setItem('displaypocketrocketBuy','flex')
            localStorage.setItem('displaypocketrocketSell','none')
        }else if(coinsName_dataDashed==='yescoin'){
            localStorage.setItem('displayyescoinBuy','flex')
            localStorage.setItem('displayyescoinSell','none')
        }else if(coinsName_dataDashed==='avagoldcoin'){
            localStorage.setItem('displayavagoldcoinBuy','flex')
            localStorage.setItem('displayavagoldcoinSell','none')
        }
        
    
    })
})












let receivePaymentContainer_AddressCodeDiv=document.querySelector('.receivePaymentContainer_AddressCodeDiv');



if(localStorage.getItem('Myaddress')!= null){

    receivePaymentContainer_AddressCodeDiv.innerHTML=`UQ${localStorage.getItem('Myaddress')}.max`;
    document.querySelector('.userID').innerHTML=`UQ${localStorage.getItem('Myaddress').slice(0,2)}...max`;
    
    receivePaymentContainer_AddressCodeDiv.innerHTML=`
    <div class="receivePaymentContainer_codeDiv">
        <span class="codeI">${localStorage.getItem('Mycode').slice(0,1)}</span>
        <span class="codeII">${localStorage.getItem('Mycode').slice(1,2)}</span>
        <span class="codeIII">${localStorage.getItem('Mycode').slice(2,3)}</span>
        <span class="codeIV">${localStorage.getItem('Mycode').slice(3,4)}</span>
        <span class="codeV">${localStorage.getItem('Mycode').slice(4,5)}</span>
        <span class="codeVI">${localStorage.getItem('Mycode').slice(5,6)}</span>
        <span class="codeVII">${localStorage.getItem('Mycode').slice(6,7)}</span>
        <span class="codeVIII">${localStorage.getItem('Mycode').slice(7,8)}</span>
        <span class="codeIX">${localStorage.getItem('Mycode').slice(8,9)}</span>
    </div> `;

    
}






sessionStorage.setItem('copyAddress','False')


document.querySelector('.code').addEventListener('click',()=>{

    if(localStorage.getItem('Mycode')!= null){
        receivePaymentContainer_AddressCodeDiv.innerHTML=`
        <div class="receivePaymentContainer_codeDiv">
            <span class="codeI">${localStorage.getItem('Mycode').slice(0,1)}</span>
            <span class="codeII">${localStorage.getItem('Mycode').slice(1,2)}</span>
            <span class="codeIII">${localStorage.getItem('Mycode').slice(2,3)}</span>
            <span class="codeIV">${localStorage.getItem('Mycode').slice(3,4)}</span>
            <span class="codeV">${localStorage.getItem('Mycode').slice(4,5)}</span>
            <span class="codeVI">${localStorage.getItem('Mycode').slice(5,6)}</span>
            <span class="codeVII">${localStorage.getItem('Mycode').slice(6,7)}</span>
            <span class="codeVIII">${localStorage.getItem('Mycode').slice(7,8)}</span>
            <span class="codeIX">${localStorage.getItem('Mycode').slice(8,9)}</span>
        </div> `;
    }
    
    sessionStorage.setItem('copyAddress','False')

})

document.querySelector('.address').addEventListener('click',()=>{
    
    if(localStorage.getItem('Myaddress') != null){
        receivePaymentContainer_AddressCodeDiv.innerHTML=`UQ${localStorage.getItem('Myaddress')}.max`;
    }

    sessionStorage.setItem('copyAddress','True')
})

//copyButton
document.querySelector('.copyButton').addEventListener('click',()=>{
    
    if(sessionStorage.getItem('copyAddress')==='True'){
        navigator.clipboard.writeText(`UQ${localStorage.getItem('Myaddress')}.max`)
    }else{
        navigator.clipboard.writeText(`${localStorage.getItem('Mycode')}`)
    }

    document.querySelector('.copeid_Div').style.display='block';
    setTimeout(()=>{
        document.querySelector('.copeid_Div').style.display='none';
    },3000)
})




//userID
document.querySelector('.userID').addEventListener('click',()=>{
    
    navigator.clipboard.writeText(`UQ${localStorage.getItem('Myaddress')}.max`)

    document.querySelector('.copeid_Div').style.display='block';
    setTimeout(()=>{
        document.querySelector('.copeid_Div').style.display='none';
    },3000)
})








let inputI=document.querySelector('.inputI');
let inputII=document.querySelector('.inputII');
let inputIII=document.querySelector('.inputIII');
let inputIV=document.querySelector('.inputIV');






setInterval(()=>{

    if(localStorage.getItem('passcode')===null){
        localStorage.setItem('passcode','')
    }else{
       
        if(`${localStorage.getItem('passcode')}`.length===0){

            
            inputI.innerText='|';
            inputII.innerText='';
            inputIII.innerText='';
            inputIV.innerText='';

        }else if(`${localStorage.getItem('passcode')}`.length===1){

            

            inputI.innerText=`${localStorage.getItem('passcode')}`.slice(0,1);
            inputII.innerText='|';
            inputIII.innerText='';
            inputIV.innerText='';

        }else if(`${localStorage.getItem('passcode')}`.length===2){

            inputI.innerText=`${localStorage.getItem('passcode')}`.slice(0,1);
            inputII.innerText=`${localStorage.getItem('passcode')}`.slice(1,2);
            inputIII.innerText='|';
            inputIV.innerText='';

        }else if(`${localStorage.getItem('passcode')}`.length===3){

            inputI.innerText=`${localStorage.getItem('passcode')}`.slice(0,1);
            inputII.innerText=`${localStorage.getItem('passcode')}`.slice(1,2);
            inputIII.innerText=`${localStorage.getItem('passcode')}`.slice(2,3);
            inputIV.innerText='|';

        }else if(`${localStorage.getItem('passcode')}`.length===4){

            inputI.innerText=`${localStorage.getItem('passcode')}`.slice(0,1);
            inputII.innerText=`${localStorage.getItem('passcode')}`.slice(1,2);
            inputIII.innerText=`${localStorage.getItem('passcode')}`.slice(2,3);
            inputIV.innerText=`${localStorage.getItem('passcode')}`.slice(3,4);

        }
    }

    //
    if(localStorage.getItem('user_passcode')!=null && localStorage.getItem('AddressOrCode') ===null){

        document.querySelector('.passcode_HeaderI').innerText='Enter passcode';
        document.querySelector('.passcode_HeaderII').style.display='block';

        

        if(localStorage.getItem('user_passcode')===`${localStorage.getItem('passcode')}`){

            inputI.style.boxShadow='0px 0px 10px green';
            inputII.style.boxShadow='0px 0px 10px green';
            inputIII.style.boxShadow='0px 0px 10px green';
            inputIV.style.boxShadow='0px 0px 10px green';
            setTimeout(()=>{

                document.querySelector('.passcode_containerDiv').style.display='none';
                localStorage.setItem('passcode','')
                
                

                inputI.style.boxShadow='0px 0px 10px transparent';
                inputII.style.boxShadow='0px 0px 10px transparent';
                inputIII.style.boxShadow='0px 0px 10px transparent';
                inputIV.style.boxShadow='0px 0px 10px transparent';
            },100)






            
        }else if(`${localStorage.getItem('passcode')}`.length===4){

            inputI.style.boxShadow='0px 0px 10px red';
            inputII.style.boxShadow='0px 0px 10px red';
            inputIII.style.boxShadow='0px 0px 10px red';
            inputIV.style.boxShadow='0px 0px 10px red';

            localStorage.setItem('passcode','')
            
            
        }


    }else if(`${localStorage.getItem('passcode')}`.length===4 && localStorage.getItem('New_passcode')!=null && localStorage.getItem('AddressOrCode') ===null){

        if(localStorage.getItem('New_passcode')===`${localStorage.getItem('passcode')}`){

            

            inputI.style.boxShadow='0px 0px 10px green';
            inputII.style.boxShadow='0px 0px 10px green';
            inputIII.style.boxShadow='0px 0px 10px green';
            inputIV.style.boxShadow='0px 0px 10px green';
            setTimeout(()=>{

                document.querySelector('.passcode_HeaderI').innerText='Enter passcode';
                document.querySelector('.passcode_HeaderII').style.display='block';
                localStorage.setItem('user_passcode',`${localStorage.getItem('passcode')}`)
                localStorage.setItem('passcode','')


                inputI.style.boxShadow='0px 0px 10px transparent';
                inputII.style.boxShadow='0px 0px 10px transparent';
                inputIII.style.boxShadow='0px 0px 10px transparent';
                inputIV.style.boxShadow='0px 0px 10px transparent';
            },100)






            
        }else if(`${localStorage.getItem('passcode')}`.length===4){

            inputI.style.boxShadow='0px 0px 10px red';
            inputII.style.boxShadow='0px 0px 10px red';
            inputIII.style.boxShadow='0px 0px 10px red';
            inputIV.style.boxShadow='0px 0px 10px red';

            localStorage.setItem('passcode','')
            
            

            setTimeout(()=>{

                localStorage.removeItem('New_passcode')
                document.querySelector('.passcode_HeaderI').innerText='Create new passcode';

                inputI.style.boxShadow='0px 0px 10px transparent';
                inputII.style.boxShadow='0px 0px 10px transparent';
                inputIII.style.boxShadow='0px 0px 10px transparent';
                inputIV.style.boxShadow='0px 0px 10px transparent';
            },300)
            
        }
        
        

    }else if(`${localStorage.getItem('passcode')}`.length===4 && localStorage.getItem('New_passcode')===null && localStorage.getItem('AddressOrCode') ===null){

        document.querySelector('.passcode_HeaderI').innerText='Re-enter passcode';
        localStorage.setItem('New_passcode',`${localStorage.getItem('passcode')}`)
        localStorage.setItem('passcode','')
        

    }

},200)


//keyBoard_keys
const keyBoard_keys=document.querySelectorAll('.key');
keyBoard_keys.forEach((e)=>{
    e.addEventListener('click',()=>{

        let dataDashed_Id=e.dataset.id;
        let getpasscode=localStorage.getItem('passcode');
        
        if(dataDashed_Id==='<'){
            localStorage.setItem('passcode',getpasscode.slice(0,Number(getpasscode.length)-1))
        }else if(`${localStorage.getItem('passcode')}`.length < 4){
            localStorage.setItem('passcode',getpasscode+`${dataDashed_Id}`)
        }
        

        
    })
})























let transaction_SD_Div=document.querySelector('.transaction_SD_Div');
let passcode_containerDiv=document.querySelector('.passcode_containerDiv');
let Inputcode=document.querySelector('.Inputcode');

//transactionAmount_CD_I
document.querySelector('.transactionAmount_CD_I').addEventListener('keyup',()=>{
    

    if(Number(document.querySelector('.transactionAmount_CD_I').value)<Number(document.querySelector('.totalAmount').innerText.slice(2,document.querySelector('.totalAmount').innerText.length)) ){

        document.querySelector('.transactionAmount_CD_maxD_right').style.color='white';

    }else{

        document.querySelector('.transactionAmount_CD_maxD_right').style.color='red';
    }
})

let transactionAmount_button=document.querySelector('.transactionAmount_button');
transactionAmount_button.addEventListener('click',()=>{

    
    
    

    if(Number(document.querySelector('.transactionAmount_CD_I').value)<=Number(document.querySelector('.totalAmount').innerText.slice(2,document.querySelector('.totalAmount').innerText.length)) && Number(document.querySelector('.transactionAmount_CD_I').value) !=0){

        
        if(Inputcode.value.includes('max')){

            localStorage.setItem('AmountTransaction',`${localStorage.getItem('currencySign')} ${Number(document.querySelector('.transactionAmount_CD_I').value)}`)

            localStorage.setItem('AddressTransaction',`${Inputcode.value}`.slice(2,Inputcode.value.length-4))
            localStorage.setItem('AddressOrCode',`${Inputcode.value}`.slice(0,4)+'...max')


        }else{
            localStorage.setItem('AmountTransaction',`${localStorage.getItem('currencySign')} ${Number(document.querySelector('.transactionAmount_CD_I').value)}`)

            localStorage.setItem('AddressTransaction',Inputcode.value)
            localStorage.setItem('AddressOrCode',`${Number(Inputcode.value)}`)
        }

        transaction_SD_Div.style.display='block';

        document.querySelector('.transaction_SD_cancel').style.display='block';
        document.querySelector('.transaction_SD_confirm').style.display='block';
        document.querySelector('.transaction_SD_done').style.display='none';

        document.querySelector('.transaction_SD_button').style.display='flex';
        document.querySelector('.transaction_SD_Icon').style.display='none';
        document.querySelector('.transaction_SD_HI').innerText='Confirm transaction!';
    }

    
    
})


let transaction_SD_cancel=document.querySelector('.transaction_SD_cancel');
transaction_SD_cancel.addEventListener('click',()=>{
    transaction_SD_Div.style.display='none';
    localStorage.removeItem('AddressOrCode')
})

let transaction_SD_confirm=document.querySelector('.transaction_SD_confirm');
transaction_SD_confirm.addEventListener('click',()=>{
    passcode_containerDiv.style.display='block';
    document.querySelector('.transaction_SD_button').style.display='none';
    document.querySelector('.transaction_SD_Icon').style.display='block';
    document.querySelector('.transaction_SD_HI').innerText='Please wait a moment...';

    
})




setInterval(()=>{
    

    if(Inputcode.value != localStorage.getItem('AmountTransaction') && localStorage.getItem('AddressOrCode') != null){

        document.querySelector('.transaction_SD_AmountRight').innerHTML=`${localStorage.getItem('AmountTransaction')}`;

        document.querySelector('.transaction_SD_RecipientRight').innerText=localStorage.getItem('AddressOrCode');
        
    }

    
},100)





















//swapPage_container
const swapPage_container=document.querySelectorAll('.swapPage_container');
swapPage_container.forEach((e)=>{
    e.addEventListener('click',()=>{

        let currencyPrefix=e.dataset.idPrefix;
        let currencySign=e.dataset.idSign;
        

        localStorage.setItem('currencyPrefix',`${currencyPrefix}`)
        localStorage.setItem('currencySign',`${currencySign}`)

        

    })
})


let wordsArray=[
    "call"
    ,
    "deep"
    ,
    "fear"
    ,
    "glow"
    ,
    "buff"
    ,
    "deem"
    ,
    "fast"
    ,
    "glee"
    ,
    "boss"
    ,
    "rice"
    ,
    "able"
    ,
    "calm"
    ,
    "dice"
    ,
    "feat"
    ,
    "keep"
    ,
    "dime"
    ,
    "care"
    ,
    "ably"
    ,
    "cash"
    ,
    "real"
];



if(localStorage.getItem('prase1')===null){
    

    localStorage.setItem('prase1',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase2',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase3',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase4',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase5',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase6',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase7',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase8',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase9',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase10',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase11',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase12',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase13',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase14',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase15',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase16',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase17',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase18',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase19',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase20',wordsArray[Math.round(Math.random()*19)])
    
}

//localStorage.getItem('prase1')
document.querySelector('.praseI').innerText=`1. ${localStorage.getItem('prase1')}`;
document.querySelector('.praseII').innerText=`2. ${localStorage.getItem('prase2')}`;
document.querySelector('.praseIII').innerText=`3. ${localStorage.getItem('prase3')}`;
document.querySelector('.praseIV').innerText=`4. ${localStorage.getItem('prase4')}`;
document.querySelector('.praseV').innerText=`5. ${localStorage.getItem('prase5')}`;

document.querySelector('.praseVI').innerText=`6. ${localStorage.getItem('prase6')}`;
document.querySelector('.praseVII').innerText=`7. ${localStorage.getItem('prase7')}`;
document.querySelector('.praseVIII').innerText=`8. ${localStorage.getItem('prase8')}`;
document.querySelector('.praseIX').innerText=`9. ${localStorage.getItem('prase9')}`;
document.querySelector('.praseX').innerText=`10. ${localStorage.getItem('prase10')}`;

document.querySelector('.praseXI').innerText=`11. ${localStorage.getItem('prase11')}`;
document.querySelector('.praseXII').innerText=`12. ${localStorage.getItem('prase12')}`;
document.querySelector('.praseXIII').innerText=`13. ${localStorage.getItem('prase13')}`;
document.querySelector('.praseXIV').innerText=`14. ${localStorage.getItem('prase14')}`;
document.querySelector('.praseXV').innerText=`15. ${localStorage.getItem('prase15')}`;

document.querySelector('.praseXVI').innerText=`16. ${localStorage.getItem('prase16')}`;
document.querySelector('.praseXVII').innerText=`17. ${localStorage.getItem('prase17')}`;
document.querySelector('.praseXVIII').innerText=`18. ${localStorage.getItem('prase18')}`;
document.querySelector('.praseXIX').innerText=`19. ${localStorage.getItem('prase19')}`;
document.querySelector('.praseXX').innerText=`20. ${localStorage.getItem('prase20')}`;












backup_check()
function backup_check(){

    let Random_I=Math.round(Math.random()*19+1);
    let Random_II=Math.round(Math.random()*19+1);
    let Random_III=Math.round(Math.random()*19+1);


    
    if(sessionStorage.getItem('CheckBackup_login')==='False'){
        document.querySelector('.backupCheck_CD_HI').innerHTML='Backup Check';

        document.querySelector('.backupCheck_CD_HII').innerHTML=`Let's see if you've got everything right. <br> Enter words ${Random_I},${Random_II}, and ${Random_III}.`;
    }else if(sessionStorage.getItem('CheckBackup_login')==='True' ){

        document.querySelector('.backupCheck_CD_HI').innerHTML='Enter your recovery phrase';

        document.querySelector('.backupCheck_CD_HII').innerHTML=`To change your passcode,enter words ${Random_I},${Random_II}, and ${Random_III} secret recovery words given to you when you created your wallet.`;
    }else{
        document.querySelector('.backupCheck_CD_HI').innerHTML='Enter your recovery phrase';

        document.querySelector('.backupCheck_CD_HII').innerHTML=`To restore access to your wallet,enter words ${Random_I},${Random_II}, and ${Random_III} secret recovery words given to you when you created your wallet.`;

    }
           
    document.querySelector('.backupInputI_N').innerText=`${Random_I}:`;
    document.querySelector('.backupInputII_N').innerText=`${Random_II}:`;
    document.querySelector('.backupInputIII_N').innerText=`${Random_III}:`;


    localStorage.setItem('backupInputI_N',Random_I)
    localStorage.setItem('backupInputII_N',Random_II)
    localStorage.setItem('backupInputIII_N',Random_III)



}

let backupInputI=document.querySelector('.backupInputI');
let backupInputII=document.querySelector('.backupInputII');
let backupInputIII=document.querySelector('.backupInputIII');
//backupCheck_CD_done
document.querySelector('.backupCheck_CD_done').addEventListener('click',()=>{


    
    
    if(localStorage.getItem(`prase${localStorage.getItem('backupInputI_N')}`)===`${backupInputI.value}`.toLowerCase()){
        backupInputI.style.boxShadow='0px 0px 4px green';
    }else{
        backupInputI.style.boxShadow='0px 0px 4px red';
    }

    if(localStorage.getItem(`prase${localStorage.getItem('backupInputII_N')}`)===`${backupInputII.value}`.toLowerCase()){
        backupInputII.style.boxShadow='0px 0px 4px green';
    }else{
        backupInputII.style.boxShadow='0px 0px 4px red';
    }

    if(localStorage.getItem(`prase${localStorage.getItem('backupInputIII_N')}`)===`${backupInputIII.value}`.toLowerCase()){
        backupInputIII.style.boxShadow='0px 0px 4px green';
    }else{
        backupInputIII.style.boxShadow='0px 0px 4px red';
    }

    //textCheckBackup
    if(localStorage.getItem(`prase${localStorage.getItem('backupInputI_N')}`)===`${backupInputI.value}`.toLowerCase() && localStorage.getItem(`prase${localStorage.getItem('backupInputII_N')}`)===`${backupInputII.value}`.toLowerCase() && localStorage.getItem(`prase${localStorage.getItem('backupInputIII_N')}`)===`${backupInputIII.value}`.toLowerCase() && sessionStorage.getItem('textCheckBackup') != null && sessionStorage.getItem('CheckBackup_login')!='login'){

        setTimeout(()=>{
            backupInputI.style.boxShadow='0px 0px 4px transparent';
            backupInputII.style.boxShadow='0px 0px 4px transparent';
            backupInputIII.style.boxShadow='0px 0px 4px transparent';
            backupInputI.value='';
            backupInputII.value='';
            backupInputIII.value='';
            document.querySelector('.backupCheck_CD_Div').style.display='none';
            backup_check()
        },2000)
        
    }else if(sessionStorage.getItem('textCheckBackup') != null){
        

        setTimeout(()=>{
            backupInputI.style.boxShadow='0px 0px 4px transparent';
            backupInputII.style.boxShadow='0px 0px 4px transparent';
            backupInputIII.style.boxShadow='0px 0px 4px transparent';
            if(localStorage.getItem('Login') !='OA'){
                backupInputI.value='';
                backupInputII.value='';
                backupInputIII.value='';
            }
            backup_check()
            
        },2000)


        
    }
    

    //forgetPasscodeCheckBackup
    if(localStorage.getItem(`prase${localStorage.getItem('backupInputI_N')}`)===`${backupInputI.value}`.toLowerCase() && localStorage.getItem(`prase${localStorage.getItem('backupInputII_N')}`)===`${backupInputII.value}`.toLowerCase() && localStorage.getItem(`prase${localStorage.getItem('backupInputIII_N')}`)===`${backupInputIII.value}`.toLowerCase() && sessionStorage.getItem('textCheckBackup') === null && sessionStorage.getItem('CheckBackup_login')!='login'){

        localStorage.removeItem('New_passcode')
        localStorage.removeItem('user_passcode')

        document.querySelector('.passcode_HeaderI').innerText='Create new passcode';
        document.querySelector('.passcode_HeaderII').style.display='none';
        

        setTimeout(()=>{
            backupInputI.style.boxShadow='0px 0px 4px transparent';
            backupInputII.style.boxShadow='0px 0px 4px transparent';
            backupInputIII.style.boxShadow='0px 0px 4px transparent';
            backupInputI.value='';
            backupInputII.value='';
            backupInputIII.value='';
            document.querySelector('.backupCheck_CD_Div').style.display='none';
            backup_check()
        },2000)

    }else if(sessionStorage.getItem('textCheckBackup') === null){
        

        setTimeout(()=>{
            backupInputI.style.boxShadow='0px 0px 4px transparent';
            backupInputII.style.boxShadow='0px 0px 4px transparent';
            backupInputIII.style.boxShadow='0px 0px 4px transparent';

            if(localStorage.getItem('Login') !='OA'){
                backupInputI.value='';
                backupInputII.value='';
                backupInputIII.value='';
            }
            backup_check()
        },2000)

    }
})




document.querySelector('.checkBackupButton').addEventListener('click',()=>{
    document.querySelector('.backupCheck_CD_Div').style.display='block';
    sessionStorage.setItem('textCheckBackup','')
    sessionStorage.setItem('CheckBackup_login','False')
    backup_check()
    
})

document.querySelector('.toBackPage_BC').addEventListener('click',()=>{
    if(sessionStorage.getItem('changePasscode') != null){

        document.querySelector('.backupCheck_CD_Div').style.display='none';
        document.querySelector('.passcode_containerDiv').style.display='none';
        sessionStorage.removeItem('changePasscode')
    }else{
        document.querySelector('.backupCheck_CD_Div').style.display='none';
    }
    
})


document.querySelector('.passcode_HeaderII').addEventListener('click',()=>{
    
    document.querySelector('.backupCheck_CD_Div').style.display='block';
    sessionStorage.removeItem('textCheckBackup')
    sessionStorage.setItem('CheckBackup_login','True')
    backup_check()

})


///
//deleteAccount
document.querySelector('.deleteAccount_B').addEventListener('click',()=>{

    document.querySelector('.signOut_deleteAccount_CD_Div').style.display='block';
    document.querySelector('.signOut_deleteAccount_C_HI').innerText='delete wallet data';
    document.querySelector('.signOut_deleteAccount_C_HII').innerHTML='Wallet keys and all personal data will be erased from this device.';
    document.querySelector('.deleteButton').innerText='delete wallet data';
    sessionStorage.setItem('deleteaccountAndSignout','deleteaccount')
})
//signOut
document.querySelector('.signOut_B').addEventListener('click',()=>{

    document.querySelector('.signOut_deleteAccount_CD_Div').style.display='block';
    document.querySelector('.signOut_deleteAccount_C_HI').innerText='sign out';
    document.querySelector('.signOut_deleteAccount_C_HII').innerHTML='Wallet keys will be erased  from this device';
    document.querySelector('.deleteButton').innerText='sign out';
    
    sessionStorage.setItem('deleteaccountAndSignout','Signout')
})






//signOut
document.querySelector('.deleteButton').addEventListener('click',()=>{
    
   localStorage.setItem('displayCoins',Number(localStorage.getItem('displayWalletAmount')))

    localStorage.removeItem('currencySign')
    localStorage.removeItem('currencyPrefix')



    localStorage.removeItem('passcode')
    localStorage.removeItem('AmountTransaction')
    localStorage.removeItem('AddressTransaction')
    localStorage.removeItem('AddressOrCode')
    localStorage.removeItem('receiveCount')


    localStorage.removeItem('prase1')
    localStorage.removeItem('prase2')
    localStorage.removeItem('prase3')
    localStorage.removeItem('prase4')
    localStorage.removeItem('prase5')
    localStorage.removeItem('prase6')
    localStorage.removeItem('prase7')
    localStorage.removeItem('prase8')
    localStorage.removeItem('prase9')
    localStorage.removeItem('prase10')
    localStorage.removeItem('prase11')
    localStorage.removeItem('prase12')
    localStorage.removeItem('prase13')
    localStorage.removeItem('prase14')
    localStorage.removeItem('prase15')
    localStorage.removeItem('prase16')
    localStorage.removeItem('prase17')
    localStorage.removeItem('prase18')
    localStorage.removeItem('prase19')
    localStorage.removeItem('prase20')


    localStorage.removeItem('New_passcode')
    localStorage.removeItem('user_passcode')


    localStorage.removeItem('displayWalletAmount')
    localStorage.removeItem('connect')
    localStorage.removeItem('displayCoinSave')

    localStorage.removeItem('Login')

    //////////////////////

    localStorage.removeItem('receiveCount')
    localStorage.removeItem('receive0')
    localStorage.removeItem('receive1')
    localStorage.removeItem('receive2')
    localStorage.removeItem('receive3')
    localStorage.removeItem('receive4')
    localStorage.removeItem('receive5')

    localStorage.removeItem('receive6')
    localStorage.removeItem('receive7')
    localStorage.removeItem('receive8')
    localStorage.removeItem('receive9')
    localStorage.removeItem('receive10')

    localStorage.removeItem('receive11')
    localStorage.removeItem('receive12')
    localStorage.removeItem('receive13')
    localStorage.removeItem('receive14')
    localStorage.removeItem('receive15')

    localStorage.removeItem('receive16')
    localStorage.removeItem('receive17')
    localStorage.removeItem('receive18')
    localStorage.removeItem('receive19')
    localStorage.removeItem('receive20')

    localStorage.setItem('receiveCount',1)

    
    

    //
    document.querySelector('.signOut_deleteAccount_CD_loddingSign_D').style.display='block';

    setTimeout(()=>{
        document.querySelector('.signOut_deleteAccount_CD_Div').style.display='none';
        
        document.querySelector('.firstPage_ContainerI').style.display='block';
        document.querySelector('.passcode_containerDiv').style.display='block'

        document.querySelector('.passcode_HeaderI').innerText='Create new passcode';
        document.querySelector('.passcode_HeaderII').style.display='none';
        setTimeout(()=>{
            document.querySelector('.firstPage_ContainerI').style.display='none'
        },5000)
    },5000)
    

    
})










//receive count

setInterval(()=>{
    if(localStorage.getItem('receiveCount')===null){

        localStorage.setItem('receiveCount',0)

    }else if(Number(localStorage.getItem('receiveCount')) >= 20){

        localStorage.removeItem('receive0')
        localStorage.removeItem('receive1')
        localStorage.removeItem('receive2')
        localStorage.removeItem('receive3')
        localStorage.removeItem('receive4')
        localStorage.removeItem('receive5')

        localStorage.removeItem('receive6')
        localStorage.removeItem('receive7')
        localStorage.removeItem('receive8')
        localStorage.removeItem('receive9')
        localStorage.removeItem('receive10')

        localStorage.removeItem('receive11')
        localStorage.removeItem('receive12')
        localStorage.removeItem('receive13')
        localStorage.removeItem('receive14')
        localStorage.removeItem('receive15')

        localStorage.removeItem('receive16')
        localStorage.removeItem('receive17')
        localStorage.removeItem('receive18')
        localStorage.removeItem('receive19')
        localStorage.removeItem('receive20')

        localStorage.setItem('receiveCount',0)

    }
},100)







if(sessionStorage.getItem('receiveConfirm')===null){
    sessionStorage.setItem('receiveConfirm',0)
}

setInterval(()=>{

    
    if(sessionStorage.getItem('receiveConfirm')<localStorage.getItem('receiveCount')){

        let receiveSend_Html='';
        for(let i=0;i<localStorage.getItem('receiveCount'); i++){
            if(localStorage.getItem(`receive${(localStorage.getItem('receiveCount')-i)-1}`).split('?')[2] === '-'){
                receiveSend_Html+=`
                <div class="receiveSend_containerDiv">
                    <div class="receiveSend_containerDiv_left sent_Icon"></div>

                    <div class="receiveSend_containerDiv_right">
                        <div class="sendReceive_priceDiv">
                            <p class="sendReceive_priceDiv_left">Sent</p>
                            <p class="sendReceive_priceDiv_right colorRed">- ${localStorage.getItem(`receive${(localStorage.getItem('receiveCount')-i)-1}`).split('?')[0]}</p>
                        </div>
                        <div class="userAndIdDiv">
                            <p class="userAndId_left">To</p>
                            <p class="userAndId_right">${localStorage.getItem(`receive${(localStorage.getItem('receiveCount')-i)-1}`).split('?')[1]}</p>
                        </div>
                    </div>
                </div>
                `;
            }else{
                receiveSend_Html+=`
                <div class="receiveSend_containerDiv">
                    <div class="receiveSend_containerDiv_left receive_Icon"></div>
                    <div class="receiveSend_containerDiv_right">
                        <div class="sendReceive_priceDiv">
                            <p class="sendReceive_priceDiv_left">Receive</p>
                            <p class="sendReceive_priceDiv_right colorGreen">+ ${localStorage.getItem(`receive${(localStorage.getItem('receiveCount')-i)-1}`).split('?')[0]}</p>
                        </div>
                        <div class="userAndIdDiv">
                            <p class="userAndId_left">From</p>
                            <p class="userAndId_right">${localStorage.getItem(`receive${(localStorage.getItem('receiveCount')-i)-1}`).split('?')[1]}</p>
                        </div>
                    </div>
                </div>
                `;
            }

            sessionStorage.setItem('receiveConfirm',i)
        }

        document.querySelector('.receiveSend_mainContainerDiv').innerHTML=receiveSend_Html;

    }


},500)

































//sentPage_Button
document.querySelector('.sentPage_Button').addEventListener('click',()=>{

    
    if(Inputcode.value===''){

        document.querySelector('.Haader_address').innerText='To: unknown user';
    }else if(Inputcode.value.includes('max')){

        document.querySelector('.Haader_address').innerText='To: '+`${Inputcode.value}`.slice(0,4)+'...max';
    }else{
        
        document.querySelector('.Haader_address').innerText=`To: ${Number(Inputcode.value)}`;
    }
    
})














//connectRrealWithWallet_logoD_middle

setInterval(()=>{

    
    let MyaddressLength=`${localStorage.getItem('Myaddress')}`.length;

    if(localStorage.getItem('MyaddressLength')=== null || Number(localStorage.getItem('MyaddressLength'))===6 || Number(localStorage.getItem('MyaddressLength'))===0){
        localStorage.setItem('MyaddressLength',MyaddressLength)
        localStorage.setItem('starsLeft','******')
    }




    //MyaddressLength
    localStorage.setItem('MyaddressLength',Number(localStorage.getItem('MyaddressLength'))-1)

    
    

    
    //fiveLetter
    let fiveLetter=`${localStorage.getItem('Myaddress')}`.slice(Number(localStorage.getItem('MyaddressLength'))-6,Number(localStorage.getItem('MyaddressLength')));
    
    
    

//connectRrealWithWallet_logoD_middleLeft
document.querySelector('.connectRrealWithWallet_logoD_middleLeft').innerText=fiveLetter;


//End first step





if(localStorage.getItem('starsLeft')==='*****'){
    localStorage.setItem('starsLeft','******')
}else if(localStorage.getItem('starsLeft')==='******'){
    localStorage.setItem('starsLeft','*****')
}

//connectRrealWithWallet_logoD_middleRight
document.querySelector('.connectRrealWithWallet_logoD_middleRight').innerText=localStorage.getItem('starsLeft');

//End secound step





//connectRrealWithWallet_RIRA_S
document.querySelector('.connectRrealWithWallet_RIRA_S').innerText=`UQ${localStorage.getItem('Myaddress')}`.slice(0,4)+'...max';

},600)





//CW_B
document.querySelector('.CW_B').addEventListener('click',()=>{

    document.querySelector('.CW_B').style.backgroundColor='rgb(0, 0, 43)';

    setTimeout(()=>{
        document.querySelector('.BST').style.display='none';
        document.querySelector('.done').style.display='block';

        localStorage.removeItem('connectWallet')
        localStorage.setItem('toWalletConnect','UQ4a...max')

        if(localStorage.getItem('connect')===null){
            localStorage.setItem('connect','C')
        }

        
    },2000)

})

//connectRrealWithWallet_DC
setInterval(()=>{
    if(localStorage.getItem('connectWallet') === null){
        document.querySelector('.connectRrealWithWallet_DC').style.display='none';

        document.querySelector('.CW_B').style.backgroundColor='rgb(0, 0, 122)';
        document.querySelector('.BST').style.display='block';
        document.querySelector('.done').style.display='none';
    }else{
        document.querySelector('.connectRrealWithWallet_DC').style.display='block';
    }
},500)






//displayWalletAmount
setInterval(()=>{
    
    if(localStorage.getItem('connect')==='C'){
        localStorage.setItem('displayWalletAmount',Number(localStorage.getItem('displayWalletAmount'))+Number(localStorage.getItem('displayCoins')))

        localStorage.setItem('displayCoinSave',Number(localStorage.getItem('displayCoins')))
        localStorage.setItem('connect','AC')
    }else if(localStorage.getItem('connect')==='AC'){

        
        localStorage.setItem('displayWalletAmount',Number(localStorage.getItem('displayWalletAmount'))+(Number(localStorage.getItem('displayCoins'))-Number(localStorage.getItem('displayCoinSave'))))
        localStorage.setItem('displayCoinSave',Number(localStorage.getItem('displayCoins')))

    }
},100)








//createAndlogin_DC_CNW
document.querySelector('.createAndlogin_DC_CNW').addEventListener('click',()=>{
    localStorage.setItem('Login','NA')//NA&OA
})





//createAndlogin_DC_IEW
document.querySelector('.createAndlogin_DC_IEW').addEventListener('click',()=>{
    localStorage.setItem('Login','OA')//NA&OA
    document.querySelector('.backupCodeDiv').style.display='block';

    document.querySelector('.backupCheck_CD_Div').style.display='block';
    sessionStorage.removeItem('textCheckBackup')
    sessionStorage.setItem('CheckBackup_login','login')
    backup_check()
})



setInterval(()=>{
    
    if(localStorage.getItem('Login')===null){
        localStorage.setItem('Login','OA')
    }


    if(localStorage.getItem('Login')==='OA'){
        document.querySelector('.createAndlogin_DC').style.display='block';
    }else if(localStorage.getItem('Login')==='NA'){
        document.querySelector('.createAndlogin_DC').style.display='none';
        document.querySelector('.backupCodeDiv').style.display='none';
    }


    if(`${document.querySelector('.backupCode').value}`.length===9){
        localStorage.setItem('Mycode',document.querySelector('.backupCode').value)
    }
    

},100)





















//sentPage_selectWalletDiv

document.querySelector('.sentPage_selectWalletDiv').addEventListener('click',()=>{

    document.querySelector('.commingsoonTop_div').style.display='block';
    document.querySelector('.sentPage_selectWalletDiv_DC').style.display='flex';
    setTimeout(()=>{
        document.querySelector('.commingsoonTop_div').style.display='none';
        document.querySelector('.sentPage_selectWalletDiv_DC').style.display='none';
    },6000)

})
