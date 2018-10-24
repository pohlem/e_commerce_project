function ValidPass(f1,f2)
{
  var upperCase =/[a-z]/g;
  var lowerCase = /[A-Z]/g;
  var numeric =/[0-9]/g;

  if(f1.val()==f2.val())
  {
    if(f2.val().match(upperCase)&&f2.val().match(lowerCase)&&f2.val().match(numeric)&&f2.val().length>=8)
    {
      colorize(f1,false);
      colorize(f2, false);
      return true;
    }
    else
    {
      colorize(f1, true);
      colorize(f2, true);
      return false;
    }
  }
  else
  {
    colorize(f1, true);
    colorize(f2, true);
    return false;
  }
};

function ValidationForm(){
  if(firstName&&lastName&&email&&phone&&address&&postalCode&&pass)
  {
    return true;
  }
  else
  {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(postalCode);
    console.log(pass);
    return false;
  }
};

function ValidPC(f){
  if(!/^[0-9]{5}$/.test(f.val()))
  {
    colorize(f,true);
    return false;
  }
  else
  {
    colorize(f, false);
    return true;
  }
};

function ValidPhone(f){
  if(!/^0[1-9]{1}[\s.]{0,1}[0-9]{2}[\s.]{0,1}[0-9]{2}[\s.]{0,1}[0-9]{2}[\s.]{0,1}[0-9]{2}$/.test(f.val()))
  {
    colorize(f,true);
    return false;
  }
  else
  {
    colorize(f, false);
    return true;
  }
};
function ValidMail(f){
  if(!/^[a-z0-9_.-]+@[a-z0-9_.-]+(\.\w{1,6})$/.test(f.val()))
  {
    colorize(f,true);
    return false;
  }
  else
  {
    colorize(f, false);
    return true;
  }
};
function ValidName(f){
  if(!/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \-]{3,}$/.test(f.val()))
  {
    colorize(f,true);
    return false;
  }
  else
  {
    colorize(f, false);
    return true;
  }
};
function ValidAddress(f)
{
  reg1=/[0-9]{2},{0,1}(\sav){0,1}\.[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \-]{3,}/;
  reg2=/[0-9]{2},{0,1}[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \-]{3,}/;
  if(!reg1.test(f.val())&&!reg2.test(f.val()))
  {
    colorize(f,true);
    return false;
  }
  else
  {
    colorize(f, false);
    return true;
  }
};
function Validation(f,regExp){
  if(!regExp.test(f.val()))
  {
    colorize(f,true);
    return false;
  }
  else
  {
    colorize(f, false);
    return true;
  }
};

function colorize(f, Err)
{
  if(Err)
    f.css('border-color', '#fea5a5');
  else
    f.css('border-color' , '#006e00');
};
