$(document).on('pageshow', '#sh_tobe_approved_list', function(){  
//alert("sh_tobe_approved_list one");
$('#lis_shs').empty();
//alert("supervisor_list_view");

$(document).off('click', '#dashcooiuoiiqwwa').on('click', '#dashcooiuoiiqwwa', function() {

  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#erdsfqwwa').on('click', '#erdsfqwwa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 $(document).off('click', '#inprogresscooiuoiiqwwa').on('click', '#inprogresscooiuoiiqwwa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#waitinguoiiqwwa').on('click', '#waitinguoiiqwwa', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
   
 $(document).off('click', '#shapproveduoiiqwwa').on('click', '#shapproveduoiiqwwa', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#completedshuoiiiqwwa').on('click', '#completedshuoiiiqwwa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                  $(document).off('click', '#shnotveriuoiqwwa').on('click', '#shnotveriuoiqwwa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#rejectieiuoiiqwwa').on('click', '#rejectieiuoiiqwwa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_reject_listio'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifaluoiiqwwa').on('click', '#verifaluoiiqwwa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_Verified_false'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcooiiiqwwa').on('click', '#signoutcooiiiqwwa', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  


  
   tobe_approved_sh =  JSON.parse(sessionStorage.getItem("tobe_approved_sh"));

   //employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    sh_addressid_records_array =  JSON.parse(sessionStorage.getItem("sh_addressid_records_array"));
    sh_educational_records_array =  JSON.parse(sessionStorage.getItem("sh_educational_records_array"));
     sh_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("sh_basic_profile_records_array"));

     sh_employment_records_array =  JSON.parse(sessionStorage.getItem("sh_employment_records_array"));

     supervisor_final_command_array =  JSON.parse(sessionStorage.getItem("supervisor_final_command_array"));

coordinator_final_comment_array =  JSON.parse(sessionStorage.getItem("coordinator_final_comment_array"));

assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));
bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));
address_verification_array =  JSON.parse(sessionStorage.getItem("address_verification_array"));
reference_verification_array =  JSON.parse(sessionStorage.getItem("reference_verification_array"));

distributor_verification_array =  JSON.parse(sessionStorage.getItem("distributor_verification_array"));
distributor_details_array =  JSON.parse(sessionStorage.getItem("distributor_details_array"));

web_verification_array =  JSON.parse(sessionStorage.getItem("web_verification_array"));
supplier_details_array =  JSON.parse(sessionStorage.getItem("supplier_details_array"));
warehouse_verification_array =  JSON.parse(sessionStorage.getItem("warehouse_verification_array"));
verification_master_array =  JSON.parse(sessionStorage.getItem("verification_master_array"));

sh_regionarray =  JSON.parse(sessionStorage.getItem("sh_regionarray"));

 //alert(sh_regionarray);

if(sh_regionarray == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

var superempty=tobe_approved_sh;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#co_dashboard'), { transition: "none", changeHash: true, reverse: false });
}

for(a=0;a<tobe_approved_sh.length;a++){
  super_obj = tobe_approved_sh[a];
 //alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.type;
//alert(super_obj.qualification_id +'for');

var sup=super_obj.First_Name;
var date_new=super_obj.Doc;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);



//alert(date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear());

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+date+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/company-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'
$('#lis_shs').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);
}

/*address*/
if(qualification_id == '29'  || qualification_id == '31'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}
/*bank*/
if(qualification_id == '27' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}

/*assest*/
if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);
}

/*reference*/
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);
}

/*distributor residential address verification*/
/*if(qualification_id == '40' ){
  //alert('distributor residentisl address');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}*/

/*distributor details*/
if(qualification_id == '41' ){
  //alert('distributor details');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}

/*address details*/
if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
  
 //alert('common web ware supplier');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}

/*web verification of antecedents*/
if(qualification_id == '43' ){
  //alert('web verification');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}
/*supplier vendor details*/
if(qualification_id == '47' ){
 // alert('supplier vendor');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}
/*ware house leasing*/
if(qualification_id == '45' ){
  alert('ware housing');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shtobeapprovedlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shs').append(lis);

}

}



}


});



function shtobeapprovedlist(index){



  super_obj = tobe_approved_sh[index];
  qualification_id =super_obj.type;
  user_ida=super_obj.verification_user_id;

/*$.ajax({url: "http://staging.eimpressive.com/slim-cor/commentsboth.php?user_ida="+user_ida+"&qualification_id="+qualification_id,
  data:$('#update_to_inprogresss').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
    
      sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[0]));
      sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[1]));
     
      $.mobile.loading().hide();
          
    //  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });

}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {    
  console.log(request);
  console.log(error);  
  $("#Network").popup("open");         
  alert('Network error has occurred please try again!');
}
});*/

//alert(qualification_id +'qualification_id');
//alert(user_ida +'user');

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<sh_addressid_records_array.length;a++){
  address_obj = sh_addressid_records_array[a];

  super_obj = tobe_approved_sh[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.verification_user_id;

  if( h == g && hadd == qualification_id){
    address_objag = sh_addressid_records_array[a];
//alert(address_objag.user_id+'addressid_records_array');
}

}
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<sh_educational_records_array.length;a++){
  eductional_obj = sh_educational_records_array[a];

  super_obj = tobe_approved_sh[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id); 
g =super_obj.verification_user_id;
//alert(g+'gg');

if( h == g && hedu == qualification_id){

  eductional_objaa = sh_educational_records_array[a];
  //alert(eductional_objaa+'edutype');

}

}
}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<sh_employment_records_array.length;a++){
  employment_obj = sh_employment_records_array[a];

  super_obj = tobe_approved_sh[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.verification_user_id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = sh_employment_records_array[a];
//alert('employ');
//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}

var final = supervisor_final_command_array;
//alert(final);
if( final !== null){
for(a=0;a<supervisor_final_command_array.length;a++){
  supervisor_final_command = supervisor_final_command_array[a];
  superr_objj = tobe_approved_sh[index];

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =superr_objj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  supervisor_final_commanda = supervisor_final_command_array[a];
// alert(supervisor_final_commanda.verification_id+'supervisor_final_commanda');
}

}
}

var final = coordinator_final_comment_array;
//alert(final);
if( final !== null){
for(a=0;a<coordinator_final_comment_array.length;a++){
  supervisor_final_command = coordinator_final_comment_array[a];
  superr_objj = tobe_approved_sh[index];

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =superr_objj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  coordinator_final_commanda = coordinator_final_comment_array[a];
 //alert(coordinator_final_commanda.verification_id+'coordinator_final_commanda');
}

}
}

if(qualification_id == '29'  || qualification_id == '31'){
//alert('function address id 29 to 31');
for(a=0;a<address_verification_array.length;a++){
  address_verii = address_verification_array[a];

  super_inpro_obj = tobe_approved_sh[index];
  hj =address_verii.user_id;
  huemploy=address_verii.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  address_veriia = address_verification_array[a];
  //alert(address_veriia);
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
//alert('function reference id 32 to 35');
for(a=0;a<reference_verification_array.length;a++){
  reference = reference_verification_array[a];

  super_inpro_obj = tobe_approved_sh[index];
  hj =reference.user_id;
  huemploy=reference.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  referencea = reference_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '27' ){
//alert('function bank id 27 to 28');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  super_inpro_obj = tobe_approved_sh[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.acc_mode;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  super_inpro_obj = tobe_approved_sh[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.propert_type;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inproa = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

/*if(qualification_id == '40' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_verification_array.length;a++){
  distr_residential = distributor_verification_array[a];

  super_obj = tobe_approved_sh[index];
  hj =distr_residential.user_id;
  huemploy=distr_residential.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  distr_residentiala = distributor_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}*/

if(qualification_id == '41' ){
alert('function distributor residential id 41');
for(a=0;a<distributor_details_array.length;a++){
  dist_details = distributor_details_array[a];

  super_obj = tobe_approved_sh[index];
  hj =dist_details.user_id;
  huemploy=dist_details.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  dist_detailsa = distributor_details_array[a];
//alert(dist_detailsa.user_id+'dist_detailsa'+gj);
}
}

}

if(qualification_id == '43' ){
//alert('function web verifi  id 43');
for(a=0;a<web_verification_array.length;a++){
  web_veri = web_verification_array[a];

  super_obj = tobe_approved_sh[index];
  hj =web_veri.user_id;
  huemploy=web_veri.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  web_veria = web_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '47' ){
//alert('function supplier details id 47');
for(a=0;a<supplier_details_array.length;a++){
  supplier_vend = supplier_details_array[a];

  super_obj = tobe_approved_sh[index];
  hj =supplier_vend.user_id;
  huemploy=supplier_vend.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  supplier_venda = supplier_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '45' ){
//alert('function ware housing 45');
for(a=0;a<warehouse_verification_array.length;a++){
  ware_hous = warehouse_verification_array[a];

  super_obj = tobe_approved_sh[index];
  hj =ware_hous.user_id;
  huemploy=ware_hous.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  ware_housa = warehouse_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
//alert('function distributor residential id 40');
for(a=0;a<verification_master_array.length;a++){
  common_address = verification_master_array[a];

  super_obj = tobe_approved_sh[index];
  hj =common_address.Verification_Master_Id;
  huemploy=common_address.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  common_addressa = verification_master_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

var bank_inproa=bank_inproa;
var assest_inproa=assest_inproa;
var address_veriia=address_veriia;
var referencea=referencea;

var supervisor_final_commanda=supervisor_final_commanda;
var coordinator_final_commanda=coordinator_final_commanda;

var distr_residentiala=distr_residentiala;
var dist_detailsa=dist_detailsa;

var web_veria=web_veria;
var supplier_venda=supplier_venda;
var ware_housa=ware_housa;
var common_addressa=common_addressa;

var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
 if(eductional_objaa !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
  if(address_objag !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
  if(employment_objad !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  if(referencea !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));

sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
      if(address_veriia !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));

sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '27' ){
     if(bank_inproa !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));

sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
     if(assest_inproa !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));

sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob assest succes');
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
/*if(qualification_id == '40' ){
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}*/

if(qualification_id == '41' ){
     if(dist_detailsa !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '43' ){
      if(web_veria !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '47' ){
    if(supplier_venda !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '45' ){
  if(ware_housa !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
if(common_addressa !== undefined){ 
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_tobe_approved_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

}