export default function transformer(file, api) {
    const j = api.jscodeshift;
  
    return j(file.source)
      .find(j.JSXOpeningElement, { name: { name: 'CoinCard' }})
      .forEach(path => {
          const {attributes} = path.node
          
          const oldPropIndex = attributes.findIndex(a => a && a.name && a.name.name === 'title')
          const newPropIndex = attributes.findIndex(a => a && a.name && a.name.name === 'label')
    
        
          if(oldPropIndex > -1){
              if(newPropIndex == -1){
                  attributes[oldPropIndex] = j.jsxAttribute(j.jsxIdentifier('label'), attributes[oldPropIndex].value)
              }
          }  
          
        })
   
      .toSource();
  }
  