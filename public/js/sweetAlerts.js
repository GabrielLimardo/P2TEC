window.addEventListener(
    "load", function(){
      if(document.querySelectorAll("#trash")){
        let trash = document.querySelectorAll("#trash");
        trash.forEach(function(item){
         
          item.addEventListener("submit", function(e){
            e.preventDefault();
            Swal.fire({
                title: 'WARNING',
                text: "What is deleted will be deleted",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'YES!',
                cancelButtonText: 'NO PLEASE'
              }).then((result) => {
                if (result.value) {
                  this.submit()
                }
              })
          })
        })
      }
    
    }
)