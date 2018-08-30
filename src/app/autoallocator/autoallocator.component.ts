import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var angular: any;

@Component({
  selector: 'app-autoallocator',
  templateUrl: './autoallocator.component.html',
  styleUrls: ['./autoallocator.component.css']
})
export class AutoallocatorComponent implements OnInit {

  constructor() { }


  ngOnInit() {

    $.fn.toggleAttr = function(attr, attr1, attr2) {
      return this.each(function() {
        var self = $(this);
        if (self.attr(attr) == attr1)
          self.attr(attr, attr2);
        else
          self.attr(attr, attr1);
      });
    };
    //q1
    $('#firstrowdata').click(function(){
      $('#sales,.firstrowdatadelete').attr('colspan', function(index, attr){
        return attr == '10' ? null : '10';
      });
    });
    //q2
    $('#secondrowdata').click(function(){
      $('#sales').attr('colspan', function(index, attr){
        return attr == '9' ? null : '9';
      });
    });

    var cartApp = angular.module('sCartApp', []);
    cartApp.controller('sCartCtrl', function($scope) {

      // q1
        $scope.ngShowhideQ1 = false;
        $scope.ngShowhideFunQ1 = function(flag) {
            if (flag) {
                $scope.ngShowhideQ1 = false;
            } else {
                $scope.ngShowhideQ1 = true;
            }
        };
        // q2
        $scope.ngShowhideQ2 = false;
        $scope.ngShowhideFunQ2 = function(flag) {
            if (flag) {
                $scope.ngShowhideQ2 = false;
            } else {
                $scope.ngShowhideQ2 = true;
            }
        };
    });
  
    $('.main').scroll(function() {
      $(this).find('.sticky').css('left', $(this).scrollLeft());
  });
    /*
    angular.module('ngToggle', [])
    .controller('AppCtrl',['$scope', function($scope){
        $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };
    }]);

*/
/*
    $.fn.toggleAttr = function(attr, attr1, attr2) {
      return this.each(function() {
        var self = $(this);
        if (self.attr(attr) == attr1)
          self.attr(attr, attr2);
        else
          self.attr(attr, attr1);
      });
    };

  	$(document).ready(function(){
		    
		    $('#newquarter').change(function(){
		    	$('#submitdata').removeAttr('disabled');
		    });
		    $('#submitdata').click(function() {
		    	$('#sample_1').removeClass('hidden');
		    	$('.savedata').removeClass('hidden');
		    });
        //q1 display
        $('#firstrowdata').click(function(){
          $('.firstrow').toggleClass('hidden');
          $('.firstrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          //sales
          $('#sales').attr('colspan', function(index, attr){
              return attr == '90' ? null : '90';
          });
          $('.firstrowdatacontent').toggleClass('hidden');
        });
        //q2 display
        $('#secondrowdata').click(function(){
          $('.secondrow').toggleClass('hidden');
          $('.secondrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.secondrowdatacontent').toggleClass('hidden');
        });
        //q3 display
        $('#thirdrowdata').click(function(){
          $('.thirdrow').toggleClass('hidden');
          $('.thirdrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.thirdrowdatacontent').toggleClass('hidden');
        });

        //q4 display
        $('#fourthrowdata').click(function(){
          $('.fourthrow').toggleClass('hidden');
          $('.fourthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.fourthrowdatacontent').toggleClass('hidden');
        });

        //q5 display
        $('#fifthrowdata').click(function(){
          $('.fifthrow').toggleClass('hidden');
          $('.fifthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.fifthrowdatacontent').toggleClass('hidden');
        });

        //q6 display
        $('#sixthrowdata').click(function(){
          $('.sixthrow').toggleClass('hidden');
          $('.sixthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.sixthrowdatacontent').toggleClass('hidden');
        });

        //q7 display
        $('#seventhrowdata').click(function(){
          $('.seventhrow').toggleClass('hidden');
          $('.seventhrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.seventhrowdatacontent').toggleClass('hidden');
        });

        //q8 display
        $('#eighthrowdata').click(function(){
          $('.eighthrow').toggleClass('hidden');
          $('.eighthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.eighthrowdatacontent').toggleClass('hidden');
        });

        //q9 display
        $('#ninthrowdata').click(function(){
          $('.ninthrow').toggleClass('hidden');
          $('.ninthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.ninthrowdatacontent').toggleClass('hidden');
        });

        //qcomp1 display
        $('#compfirstrowdata').click(function(){
          $('.tenthrow').toggleClass('hidden');
          $('.compfirstrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.tenthrowdatacontent').toggleClass('hidden');
        });

        //qcomp2 display
        $('#compsecondrowdata').click(function(){
          $('.elevenththrow').toggleClass('hidden');
          $('.compsecondrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.eleventhrowdatacontent').toggleClass('hidden');
        });

        //qcomp3 display
        $('#compthirdrowdata').click(function(){
          $('.twelthrow').toggleClass('hidden');
          $('.compthirdrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.twelthrowdatacontent').toggleClass('hidden');
        });

        //qcomp4 display
        $('#compfourthrowdata').click(function(){
          $('.thirteethrow').toggleClass('hidden');
          $('.compfourthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.thirteenthrowdatacontent').toggleClass('hidden');
        });

        //qcomp5 display
        $('#compfifthrowdata').click(function(){
          $('.fourteenththrow').toggleClass('hidden');
          $('.compfifthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.fourteenthrowdatacontent').toggleClass('hidden');
        });

        //qcomp6 display
        $('#compsixthrowdata').click(function(){
          $('.fifteenthrow').toggleClass('hidden');
          $('.compsixthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.fifteenthrowdatacontent').toggleClass('hidden');
        });        

        //qcomp7 display
        $('#compseventhrowdata').click(function(){
          $('.sixteenthrow').toggleClass('hidden');
          $('.compseventhrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.sixteenthrowdatacontent').toggleClass('hidden');
        });

        //qcomp8 display
        $('#compeighthrowdata').click(function(){
          $('.seventeenthrow').toggleClass('hidden');
          $('.compeighthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.seventeenthrowdatacontent').toggleClass('hidden');
        });

        //qcomp9 display
        $('#compninthrowdata').click(function(){
          $('.eighteenthrow').toggleClass('hidden');
          $('.compninthrowdatadelete').attr('colspan', function(index, attr){
              return attr == '10' ? null : '10';
          });
          $('.eighteenthrowdatacontent').toggleClass('hidden');
        });


		  });
*/
  }

}