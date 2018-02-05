document.getElementById('execute').addEventListener('click', function(){
  var location  = document.getElementById('location').value;
  var rename    = document.getElementsByName('rename');
  var option    = 0;
  for(i = 0; i < rename.length; i++)
  {
    if(rename[i].checked)
    {
      option = rename[i].value
    }
  }
  var fs        = require('fs');
  location      = location.replace(/\\/g, "/");
  var fulldir   = location;
  console.info("lokasi : "+ location);

  fs.readdir(fulldir, function (err, files) {
    if (err)
    {
      console.log('err', err);
      return;
    }
    
    newfile       = "";
    deletechar    = document.getElementsByName('delete-character')[0].value;
    start         = document.getElementsByName('substring-start')[0].value;
    end           = document.getElementsByName('substring-end')[0].value;
    changefind    = document.getElementsByName('find')[0].value;
    changewith    = document.getElementsByName('with')[0].value;
    insertbefore  = document.getElementsByName('insert-before')[0].value;
    insertafter   = document.getElementsByName('insert-after')[0].value;

    files.forEach(function (filename) {
      arrname       = filename.split(".");
      //assumtion file name including extension has written like as follow
      //loremipsum.pdf
      filenameonly  = arrname[0];
      fileextension = "." + arrname[arrname.length-1];

    if(option == 1)
    {
      newfile = filename.replace(deletechar, "");
    }
    if(option == 2)
    {
      newfile = filename.substring(start, end);
      newfile += fileextension;
    }
    if(option == 3)
    {
      newfile = filename.replace(changefind, changewith);
    }
    if(option == 4)
    {
      newfile = insertbefore + filenameonly + insertafter + fileextension;
    }
      fs.rename(fulldir + filename, fulldir + newfile, function (err) {
        if (err)
          console.log('err', filename, err);
        else
          console.log(filename, ' > ', newfile);
      });
    });
  });
});