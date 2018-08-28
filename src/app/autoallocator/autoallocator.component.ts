import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-autoallocator',
  templateUrl: './autoallocator.component.html',
  styleUrls: ['./autoallocator.component.css']
})
export class AutoallocatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#region").change(function(){
        $('#department').removeAttr('disabled');
      });
      $("#matric").change(function(){
        $('#quarter').removeAttr('disabled');
      });
      $("#texttype").change(function(){
        $('#newquarter').removeAttr('disabled');
      });
      $('#newquarter').change(function(){
        $('#submitdata').removeAttr('disabled');
      });
      $('#submitdata').click(function() {
        $('#sample_1').removeClass('hidden');
        $('.savedata').removeClass('hidden');
      });
      $('.editbtn').click(function () {
            var currentTD = $(this).parents('tr').find('td');
            if ($(this).html() == 'Edit') {
                currentTD = $(this).parents('tr').find('td');
                $.each(currentTD, function () {
                    $(this).prop('contenteditable', true)
                });
            } else {
               $.each(currentTD, function () {
                    $(this).prop('contenteditable', false)
                });
            }
  
            $(this).html($(this).html() == '<i class="fa fa-edit"></i>' ? '<i class="fa fa-floppy-o"></i>' : '<i class="fa fa-edit"></i>')
  
        });
  
    });

}

}
