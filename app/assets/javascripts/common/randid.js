function randid(l)
{
    var text = "";
    var possible = "abcdefghjklmnopqrstuvwxyz";

    for( var i=0; i < l; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

Object.replaceAll = function (entity, needle, replacement, affectsKeys, affectsValues) {
    affectsKeys = typeof affectsKeys === "undefined" ? true : affectsKeys;
    affectsValues = typeof affectsValues === "undefined" ? true : affectsValues;

    var newEntity = {},
        regExp = new RegExp( needle, 'g' );
    for( var property in entity ) {
        if( !entity.hasOwnProperty( property ) ) {
            continue;
        }

        var value = entity[property],
            newProperty = property;

        if( affectsKeys ) {
            newProperty = property.replace( regExp, replacement );
        }

        if( affectsValues ) {
            if( typeof value === "object" ) {
                value = Object.replaceAll( value, needle, replacement, affectsKeys, affectsValues );
            } else if( typeof value === "string" ) {
                value = value.replace( regExp, replacement );
            }
        }

        newEntity[newProperty] = value;
    }

    return newEntity;
};

