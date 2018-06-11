
export function time_update(){
   return {type: 'time_passed'}
}

export function date_update(text){
    return {type: 'date_changed', text}
}