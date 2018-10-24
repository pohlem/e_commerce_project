function ValidationForm(){
  if(firstName&&lastName&&email&&phone&&address&&postalCode)
    return true;
  else
    return false;
}
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

}
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
