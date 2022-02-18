var a;
function show_hide()
{
    if (a==0)
    {
        document.getElementById("contact_f").style.display="none";
        return a=1;
    }
    else{
        document.getElementById("contact_f").style.display="flex";
        return a=0;
    }
}