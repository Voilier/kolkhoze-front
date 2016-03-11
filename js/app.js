var globalCount = 4;

$(document).ready(function() {
  
  var dialog = $('dialog').get(0);
  
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  
  $('.close').on('click', function() {
    dialog.close();
  });
  $('.profile-photo').on('click', function() {
    updateProfile();
  });


  $('.mdl-list').on('click','.delete-item', function() {
    console.log($(this));
    $(this).parent().remove();
  });
  
  $('.accept').on('click', function() {
    if ($(".newItemName").val() == "") {
      $(".newItemName").parent().addClass("is-dirty is-invalid test"); 
    } else if ($(".newItemLink").val() == "") {
      $(".newItemLink").parent().addClass("is-dirty is-invalid test"); 
    } else {

      dialog.close();
      createItem($(".newItemName").val(), $(".newItemLink").val());
    }
  });

  $("#addItemButton").on( "click", function() {
    dialog.showModal();
  });

  function createItem (name, link) {
    var newItem = '<li class="mdl-list__item mdl-list__item--two-line">' +
    '<span class="mdl-list__item-primary-content">' +
    '<i class="material-icons mdl-list__item-avatar">book</i>' +
    '<span>' + name + '</span>' +
    '<span class="mdl-list__item-sub-title">To <a href="' + link + '">' + link + '</a></span>' +
    '</span>' +
    '<i class="material-icons">mode edit</i>' + 
    '<i class="material-icons delete-item">close</i>' +
    '<span class="mdl-list__item-secondary-content">' +
    '<span class="mdl-list__item-secondary-info">Lent ?</span>' +
    '<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-'+ globalCount +'">' +
    '<input type="checkbox" id="switch-'+ globalCount +'" class="mdl-switch__input" checked />' +
    '</label>' +
    '</span>' +
    '</li>';
    console.log("Hey !");
    
    $(".mdl-list").append(newItem);
    globalCount++;
  }

  function updateProfile () {
    $(".profile-name").text("John Doo");
    $(".profile-photo").hide();
    $(".profile-photo-real").src = "http://lorempixel.com/128/128/people";
    $(".profile-photo-real").show();

    console.log("Hey 2");
  }
});
