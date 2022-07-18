$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
                maxlength:20,
            },
            email:{
                required:true,
                email:true,
            },
        }
        
    })
})
 
 
 $("#submit-form").submit((e)=>{
            e.preventDefault(),

            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzSvlOg43KmkIg8clq1-ADT-OWa3yA3YWLn6_l4NQ/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                
                success:function (response){
                   
                    $("#sent-message").show().delay(2000).fadeOut();
                    
                   // window.location.reload("#footer")
                    
                   $("#submit-form")[0].reset();
                   
                },
                error:function (err){
                    alert("Something Error")
                    }
            })
            
        })

