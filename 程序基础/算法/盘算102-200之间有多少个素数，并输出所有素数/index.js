var i,j,m;
var k=0;
for (i=100;i<=200;i++){
    for(m=1,j=2;j< i;j++)
        if(i%j==0) {

            m=0;
            break;



        }

    if(m==1){
        k++;
        console.log (i);
        console.log (k);
    }
}