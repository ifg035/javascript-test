function q2(){
    let email = $('#input-q2').val();
    if(email.includes('@')){
        let damatunWithDot = email.split('@')[1];
        let onlyDomain = domainWithDot.split('.')[0];
        alert(onlyDomain);
    } else {
        alert('이메일이 아닙니다.');
    }
}