function randid(l)
{
    var text = "";
    var possible = "abcdefghjklmnopqrstuvwxyz";

    for( var i=0; i < l; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}