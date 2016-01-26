'use strict';

let curveApp = angular.module('curveApp',[])

.controller('mainCtrl',function($scope){
  let container = document.getElementById('displayArea')
  $scope.twoSpaces = "\u00A0\u00A0";
  
  $scope.applyCurve = function(){
    container.innerHTML = '';
    let element = curveText({ 
      text: $scope.textToCurve,
      textColor: $scope.textColor,
      fontSize: $scope.fontSize,
      backColor: $scope.backColor,
      circleSize: $scope.circleSize,
      under: $scope.under,
      curvature: $scope.curvature,
      lineSides: $scope.lineSides,
      lineOnTop: $scope.lineOnTop,
      lineOnBottom: $scope.lineOnBottom,
      lengthOfLines:$scope.lengthOfLines,
      lineColor: $scope.lineColor
    })
    container.appendChild(element)

  }
  
})

