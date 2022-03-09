const n = 7;

function getFibonacci(n)
{
    var v1 = 1;
    var v2 = 1;
    var a=[];

    if (typeof n != "number") return "not allowed";

    if ((n<1) || (n>10)) return "not allowed";

    for (var i = 1; i <= n; i++) {
        a.push(v1)
        var aux=v1;
        v1=v2;
        v2=aux+v2;
    }

    console.log(a);
}

getFibonacci(n);