
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

// concise method with es5
var a = {
    b: function(){
        console.log('in b');
    },
    c: function(){
        console.log('in c');
    }
}

a.b();
a.c();

// concise method in es6 

var d = {
    e() {
        console.log('in e');
    },
    f () {
        console.log('in f');
    }
}

d.e();
d.f();