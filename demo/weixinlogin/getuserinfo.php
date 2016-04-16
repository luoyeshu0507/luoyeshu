<?php
require('HttpRequest.php');

$token = $_POST['token'];
$openid = $_POST['openid'];

$httpReq = new HttpRequest();
$httpReq->url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$token.'&openid='.$openid.'&lang=zh_CN';
$httpReq->method = "GET";
$httpReq->postDataFormat = HttpRequest::POST_DATA_TYPE_JSON;
//$httpReq->postFields = array('appid'=>'wxbf14eaec418da50e','secret'=>'d4624c36b6795d1d99dcf0547af5443d','code'=>$code,'grant_type'=>'authorization_code');  //post data
$ret = $httpReq->send();
//var_dump($ret['resp']);  //list data 
echo($ret['resp']);
?>