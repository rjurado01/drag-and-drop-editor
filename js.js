$(document).ready(function() {
  var vm = new Vue({
    el: 'body',
    data: {
      contentComponents: [1],
      components: [1,2],
      movingIndex: null
    },
    ready: function() {
      $( "#components_list, #content_components_list" ).sortable({
        connectWith: "#content_components_list",
        placeholder: "placeholder",
        remove: function(e,li) {
          vm.contentComponents.splice(li.item.index(), 0, vm.components[vm.movingIndex]);
          $(this).sortable('cancel');
        },
        start: function(evt, ui) {
          vm.movingIndex = ui.item.index();
        },
      }).disableSelection();
    },
    methods: {
      removeComponent: function(component) {
        this.contentComponents.$remove(component);
      },
      editComponent: function(component) {
        alert("Pendiente");
      }
    }
  })
});
