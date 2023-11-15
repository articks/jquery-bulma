/**
 * jQuery plugins for Bulma CSS Framework v1.0.1
 * By: Dmitry A Karasev
 *
 * https://github.com/articks/jquery-bulma
 *
 * Copyright 2023 Dmitry A Karasev
 * You may use this project under MIT license.
 */

/**
 * xModal
 */
(function($){
    $.fn.xModal = function(option) {
        if(this.is(".modal.is-active")) {
            switch(option) {
                case "options":{
                    return this.data("options");
                    break;
                }
                case "delete":{
                    return this.find("*[data-modaldelete]");
                    break;
                }
                case "deletebackground":{
                    return this.find(".modal-background[data-modaldelete]:first");
                    break;
                }
                case "deletebutton":{
                    return this.find(".modal-close[data-modaldelete]:first");
                    break;
                }
                case "content":{
                    return this.find("*[data-modalcontent]:first");
                    break;
                }
                case "close":{
                    if(!this.xModal("options").noclose) {
                        if(this.xModal("options").onclose && typeof(this.xModal("options").onclose)==="function") {
                            this.xModal("options").onclose(this);
                        }
                        this.remove();
                    }
                    break;
                }
                case "forcedclose":{
                    if(this.xModal("options").onclose && typeof(this.xModal("options").onclose)==="function") {
                        this.xModal("options").onclose(this);
                    }
                    this.remove();
                    break;
                }
                default:{
                    return false;
                    break;
                }
            }
        }
        else {
            console.error("Target selector mismatch!");
        }
    };
    $.extend({
        xModal:function(options){
            options = $.extend(
                {
                    content:"",
                    onshow:null,
                    onclose:null,
                    noclose:false
                },
                options
            );
            let modal = $(
                '<div class="modal is-active">'+
                    '<div class="modal-background" '+((!options.noclose)?'data-modaldelete':'')+'></div>'+
                    '<div class="modal-content" data-modalcontent></div>'+
                    ((!options.noclose)?
                        '<button class="modal-close is-large" data-modaldelete></button>'
                    :'')+
                '</div>'
            ).data("options",options).appendTo("body");
            if(options.content) {
                if(typeof(options.content)==="object" && options.content instanceof jQuery) {
                    modal.xModal("content").append(options.content);
                }
                else if(typeof(options.content)==="function") {
                    modal.xModal("content").append(options.content());
                }
                else {
                    modal.xModal("content").html(options.content);
                }
            }
            if(options.onshow && typeof(options.onshow)==="function") {
                options.onshow(modal);
            }
            modal.on("click","*[data-modaldelete]",function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).closest(".modal").xModal("close");
            });
            return modal;
        }
    });
})(jQuery);

/**
 * xModalCard
 */
(function($){
    $.fn.xModalCard = function(option) {
        if(this.is(".modal.is-active")) {
            switch(option) {
                case "options":{
                    return this.data("options");
                    break;
                }
                case "delete":{
                    return this.find("*[data-modaldelete]");
                    break;
                }
                case "deletebackground":{
                    return this.find(".modal-background[data-modaldelete]:first");
                    break;
                }
                case "deletebutton":{
                    return this.find(".delete[data-modaldelete]:first");
                    break;
                }
                case "card":{
                    return this.find("*[data-modalcard]:first");
                    break;
                }
                case "title":{
                    return this.find("*[data-modaltitle]:first");
                    break;
                }
                case "body":
                case "content":{
                    return this.find("*[data-modalbody]:first");
                    break;
                }
                case "foot":
                case "buttons":{
                    return this.find("*[data-modalfoot]:first");
                    break;
                }
                case "disable":{
                    this.xModalCard("card").addClass("is-boxloading");
                    return this;
                    break;
                }
                case "enable":{
                    this.xModalCard("card").removeClass("is-boxloading");
                    return this;
                    break;
                }
                case "disabled":{
                    return this.xModalCard("card").hasClass("is-boxloading");
                    break;
                }
                case "close":{
                    if(!this.xModalCard("disabled") && !this.xModalCard("options").noclose) {
                        if(this.xModalCard("options").onclose && typeof(this.xModalCard("options").onclose)==="function") {
                            this.xModalCard("options").onclose(this);
                        }
                        this.remove();
                    }
                    break;
                }
                case "forcedclose":{
                    if(this.xModalCard("options").onclose && typeof(this.xModalCard("options").onclose)==="function") {
                        this.xModalCard("options").onclose(this);
                    }
                    this.remove();
                    break;
                }
                default:{
                    return false;
                    break;
                }
            }
        }
        else {
            console.error("Target selector mismatch!");
        }
    };
    $.extend({
        xModalCard:function(options){
            options = $.extend(
                {
                    title:"",
                    content:"",
                    buttons:false,
                    onshow:null,
                    onclose:null,
                    noclose:false
                },
                options
            );
            let modal = $(
                '<div class="modal is-active">'+
                    '<div class="modal-background" '+((!options.noclose)?'data-modaldelete':'')+'></div>'+
                    '<div class="modal-card has-border-radius" data-modalcard>'+
                        '<div class="modal-card-head">'+
                            '<div class="modal-card-title" data-modaltitle></div>'+
                            ((!options.noclose)?
                                '<div class="delete" data-modaldelete></div>'
                            :'')+
                        '</div>'+
                        '<div class="modal-card-body" data-modalbody></div>'+
                        '<div class="modal-card-foot is-flex-wfix is-ofauto" data-modalfoot></div>'+
                    '</div>'+
                '</div>'
            ).data("options",options).appendTo("body");
            if(options.title) {
                if(typeof(options.title)==="object" && options.title instanceof jQuery) {
                    modal.xModalCard("title").append(options.title);
                }
                else if(typeof(options.title)==="function") {
                    modal.xModalCard("title").append(options.title());
                }
                else {
                    modal.xModalCard("title").html(options.title || "");
                }
            }
            if(options.content) {
                if(typeof(options.content)==="object" && options.content instanceof jQuery) {
                    modal.xModalCard("content").append(options.content);
                }
                else if(typeof(options.content)==="function") {
                    modal.xModalCard("content").append(options.content());
                }
                else {
                    modal.xModalCard("content").html(options.content);
                }
            }
            if(options.buttons) {
                if(typeof(options.buttons)==="object" && options.buttons instanceof jQuery) {
                    modal.xModalCard("foot").append(options.buttons);
                }
                else if(typeof(options.buttons)==="function") {
                    modal.xModalCard("foot").append(options.buttons());
                }
                else {
                    modal.xModalCard("foot").html(options.buttons);
                }
            }
            else {
                modal.xModalCard("foot").addClass("is-hidden");
            }
            if(options.onshow && typeof(options.onshow)==="function") {
                options.onshow(modal);
            }
            modal.on("click","*[data-modaldelete]",function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).closest(".modal").xModalCard("close");
            });
            return modal;
        }
    });
})(jQuery);
