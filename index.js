const path = require("path")
const fs = require("fs")
const http= require("http")

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,"public","wordlist.txt"),"utf8",function(err,data){
            if(err) throw err;
            //console.log("the text data is : \n",data);
            file_content='<!DOCTYPE html>'+
            '<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->'+
            '<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->'+
            '<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->'+
            '<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->'+
            '    <head>'+
            '        <meta charset="utf-8">'+
            '        <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
            '        <title></title>'+
            '        <meta name="description" content="">'+
            '        <meta name="viewport" content="width=device-width, initial-scale=1">'+
            '        '+
            '        <style>'+
            '        .flip-card {'+
            '         margin-top:100px;'+
            '        background-color: transparent;'+
            '        width: 300px;'+
            '        height: 300px;'+
            '        perspective: 1000px;'+
            '        }'+
            ''+
            '        .flip-card-inner {'+
            '        position: relative;'+
            '        width: 100%;'+
            '        height: 100%;'+
            '        text-align: center;'+
            '        transition: transform 0.6s;'+
            '        transform-style: preserve-3d;'+
            '        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);'+
            '        }'+
            ''+
            '        /*.flip-card:hover .flip-card-inner {'+
            '        transform: rotateY(180deg);'+
            '        }*/'+
            ''+
            '        .flip-card-front, .flip-card-back {'+
            '        position: absolute;'+
            '        width: 100%;'+
            '        height: 100%;'+
            '        backface-visibility: hidden;'+
            '        }'+
            ''+
            '        .flip-card-front {'+
            '        background-color: #bbb;'+
            '        color: black;'+
            '        }'+
            ''+
            '        .flip-card-back {'+
            '        background-color: #2980b9;'+
            '        color: white;'+
            '        transform: rotateY(180deg);'+
            '        }'+
            '        .column-left{ '+
            '        float: left;'+
            '        width: 33.333%;'+
            '        min-height: 1px;'+
            '        }'+
            '        .column-right{ '+
            '        float: right; '+
            '        width: 33.333%;'+
            '        min-height: 1px;'+
            '        }'+
            '        .column-center{ '+
            '        display: inline-block;'+
            '        width: 33.333%;'+
            '        '+
            '        }'+
            '        </style>'+
            '    </head>'+
            ''+
            '    <body>'+
            '        <!--[if lt IE 7]>'+
            '            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>'+
            '        <![endif]-->'+
            ''+
            '        <div class="container">'+
            '            <div class="column-left"></div>'+
            ''+
            '            <div class="column-center">'+
            '                <div class="flip-card">'+
            '                    <div class="flip-card-inner" onclick="rotate_card()">'+
            '                        <div class="flip-card-front">'+
            '                        <h1>palaver</h1>'+
            '                        </div>'+
            '                        <div class="flip-card-back">'+
            '                        <h1></h1> '+
            '                        </div>'+
            '                    </div>'+
            '                </div>'+
            '            </div>'+
            ''+
            '            <div class="column-right"></div>'+
            '          </div>'+
            ''+
            '        '+
            '        '+
            '        <script>'+
            ''+
            '            var flag_of_rotation=0;'+
            '            var meaning_no=0;'+
            '            var word_no=1;'+
            ''+
            ''+
            ''+
            '            var map = []; '+
            '            addDataintoMap();'+
            '            function addDataintoMap(){'+
            '                console.log("inside addData");'+
            ''+
            ''+
            ''+
            ''+
            ''+
            '                var serverVar = \''+data+'\';'+
            '                 lines=serverVar.split("#");'+
            '                 lines.forEach(function (item, index) {'+
            '                 word_=item.split(":");'+
            '                 map.push({word:word_[0],meaning:word_[1]});'+
            '                 });'+
            ''+
            '            }'+
            '            function rotate_card(){'+
            '                var j=document.getElementsByClassName("flip-card-inner")[0];'+
            '                console.log(j);'+
            '                if(flag_of_rotation%2==0){'+
            '                    j.style.transform = "rotateY(180deg)";'+
            '                    var h1=document.getElementsByClassName("flip-card-back")[0].getElementsByTagName("h1")[0];'+
            '                    h1.innerHTML=map[meaning_no%map.length].meaning;'+
            '                    meaning_no++;'+
            '                }'+
            '                else{'+
            '                    j.style.transform = "rotateY(0deg)";'+
            '                    var h1=document.getElementsByClassName("flip-card-front")[0].getElementsByTagName("h1")[0];'+
            '                    h1.innerHTML=map[word_no%map.length].word;'+
            '                    word_no++;'+
            '                }'+
            ''+
            '                flag_of_rotation++;'+
            ''+
            '                '+
            '            }'+
            ''+
            ''+
            ''+
            ''+
            '        </script>'+
            ''+
            '    </body>'+
            '</html>';
              
            console.log("flash card activated");
            //res.writeHead(200,{"Content-type": "text/html"});
            res.end(file_content);


        });
    }



    
    });
    
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));