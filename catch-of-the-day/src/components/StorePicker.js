import React from 'react' // es6 modules

class StorePicker extends React.Component{

    render(){
        return (<form className="store-selector">
            { /* comment */ }    
            <h2>Please enter a store</h2>
            <input type='text' required placeholder="store name" />
            <button type='submit'>Visit Store </button> 
        </form>
         )
    }

}

export default StorePicker;