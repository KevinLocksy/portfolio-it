import {cssRules,kfRules} from '$constants/cssStyles.const.js';

//init css classes to be add with js (that are not used at the html document init) in the CssStyleSheet 
export function initCssStyleSheet(){
  const sheet = new CSSStyleSheet();
  document.adoptedStyleSheets = [sheet]; //only in browser?
  insertRules(sheet,cssRules,"class");
  insertRules(sheet,kfRules,"kf");
}

function insertRules(sheet,json,type){
  for (var i=0; i < json.length; i++){
    const ele = json[i];
    Object.keys(ele).forEach(function(key) {
      const rule = type == "kf" ? new KeyframesRule(key,ele[key]) : new CssStyleRule(key,ele[key]); ;
      sheet.insertRule(rule.get());
  });
  }
}//end function insertRules(json, type)

class KeyframesRule{
  constructor(keyframe,json){
    this.keyframe="@keyframes "+keyframe;
    this.json=json;
  }
  get(){
    var str = this.keyframe+ " { ";
    for (const atRule in this.json) {
      str += atRule+" {";
      for (const key in this.json[atRule]){
        str += " "+key+":"+this.json[atRule][key]+"; ";
      }
      str += "} ";
    }
    str += "} ";
    return str;
  }//end get
  getKeyFrameRule(sheet,ruleName){
    const KeyFrameRuleName = "CSSKeyframesRule";
    const cssRules = sheet.cssRules;
    let wantedRule = null;
    let i = 0;
    while(i < cssRules.length && wantedRule == null){
      let rule = cssRules[i];
      if(rule[Symbol.toStringTag]==KeyFrameRuleName && rule.name == ruleName){
        wantedRule = rule;
        break;
      }
      i++;
    }
    return wantedRule;
  }//end getCssRule(sheet,ruleName)
}//end class KeyframesRule

class CssStyleRule{
  constructor(className,json){
    this.className="."+className;
    this.json=json;
    return this.get()
  }

  get(){
    var str =  this.className+ " { ";
    for (const key in this.json) {
      str += key+":"+this.json[key]+"; ";
    }
    str += "}";
    return str;
  }//end get

  getCssRule(sheet,ruleName){
    const CssStyleRuleName = "CSSStyleRule";
    const cssRules = sheet.cssRules;
    let wantedRule = null;
    let i = 0;
    while(i < cssRules.length && wantedRule == null){
      let rule = cssRules[i];
      if(rule[Symbol.toStringTag]==CssStyleRuleName && rule.selectorText == ruleName){
        wantedRule = rule;
        break;
      }
      i++;
    }
    return wantedRule;
  }//end getCssRule(sheet,ruleName)
}//end class CssStyleRule