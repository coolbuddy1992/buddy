import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-abg',
  templateUrl: './abg.component.html',
  styleUrls: ['./abg.component.css']
})

export class AbgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
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
        //q1 display
        $('#firstrowdata').click(function(){
          $('.firstrow').toggleClass('hidden');
          $('.firstrowdatacontent').toggleClass('hidden');
          $('.firstrowdatacontentremove').toggleClass('hidden');
        });
  
    });

}


}
