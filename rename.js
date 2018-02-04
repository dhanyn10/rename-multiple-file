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
    
    newfile     = "";
    deletechar  = "";
    start       = 0;
    end         = 0;
    changefind  = "";
    changewith  = "";

    deletechar  = document.getElementsByName('delete-character')[0].value;
    start       = document.getElementsByName('substring-start')[0].value;
    end         = document.getElementsByName('substring-end')[0].value;
    changefind  = document.getElementsByName('find')[0].value;
    changewith  = document.getElementsByName('with')[0].value;

    files.forEach(function (filename) {
      fileextension = filename.split(".");
      fileextension = "." + fileextension[fileextension.length-1];

    if(option == 1)
    {
      newfile = filename.replace(deletechar, "");
    }
    else if(option == 2)
    {
      newfile = filename.substring(start, end);
      newfile += fileextension;
    }
    else if(option == 3)
    {
      newfile = filename.replace(changefind, changewith);
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