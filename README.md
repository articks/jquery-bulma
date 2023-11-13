# jquery-bulma
jQuery plugins for Bulma CSS Framework (very simple)


# xModal

```
let modal = $.xModal({
  content:"", // HTML or Function or jQuery-object for content of popup bulma-modal
  onshow:function(modal){ }, // onShow-method
  onclose:function(modal){ }, // onClose-method
  noclose:false // Marker, that popup cannot be closed
});

modal.xModal("options") - returns construct options
modal.xModal("delete") - returns jQuery-objects, witch are clickable for closing popup
modal.xModal("deletebackground") - returns jQuery-object of cleckable background for closing popup
modal.xModal("deletebutton") -  - returns jQuery-object of cleckable button for closing popup
modal.xModal("content") - returns jQuery-object of popup content
modal.xModal("close") - method for closing popup
```

# xModalCard

```
let modal = $.xModalCard({
  title:"", // HTML or Function or jQuery-object for title of popup bulma-modal-card
  content:"", // HTML or Function or jQuery-object for body of popup bulma-modal-card
  buttons:false, // HTML or Function or jQuery-object for foot of popup bulma-modal-card
  onshow:function(modal){ }, // onShow-method
  onclose:function(modal){ }, // onClose-method
  noclose:false // Marker, that popup cannot be closed
});

modal.xModalCard("options") - returns construct options
modal.xModalCard("delete") - returns jQuery-objects, witch are clickable for closing popup
modal.xModalCard("deletebackground") - returns jQuery-object of cleckable background for closing popup
modal.xModalCard("deletebutton") -  - returns jQuery-object of cleckable button for closing popup
modal.xModalCard("card") - returns jQuery-object of popup card
modal.xModalCard("title") - returns jQuery-object of popup title
modal.xModalCard("body"),
modal.xModalCard("content") - returns jQuery-object of popup content
modal.xModalCard("foot"),
modal.xModalCard("buttons") - returns jQuery-object of popup foot
modal.xModalCard("disable") - method for disable popup (add .is-boxloading for card)
modal.xModalCard("enable") - method for enable popup (remove .is-boxloading for card)
modal.xModalCard("disabled") - method for check if disabled (check .is-boxloading for card) popup
modal.xModal("close") - method for closing popup
```

