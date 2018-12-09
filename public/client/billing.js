$( " #cb" ).change(() => {

    checked = $("#cb").is(":checked");
      if (checked){
          $('.billing').hide();
      } else {
        $('.billing').show();
      }
  });