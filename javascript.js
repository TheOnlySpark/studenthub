function switchStyle()
{
   let theme = document.getElementById('style');
   
   if(theme.getAttribute('href') == 'light.css')
   {
    theme.setAttribute('href','dark.css');
   }
   else
   {
    theme.setAttribute('href','light.css');
   }
}

function warning()
{
   alert("website optimized for desktop usage");
}


