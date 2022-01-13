import AsyncStorage from '@react-native-async-storage/async-storage';


var arr = [];

function compare(a,b){
    let dif = a.score - b.score
    if(dif != 0)
        return dif
    else{
        if(a.level >= b.level)
            return 1
        else
            return -1
    }
}

export async function init(){
    try{
        let vs = await getClassifications()
        vs.forEach(e => {
            let obj = JSON.parse(e);
            arr = [...arr, obj]
        })

        arr.sort(compare)

        return true
    }catch(e){
        arr = []
        return false
    }
}

export async function saveGame(quiz){
    try{
        arr = await getClassifications()
        arr = [...arr, quiz]
        arr.sort(compare)
        arr.pop()
        let pairs = []
        let i = 1
        arr.forEach(e => {
            pairs = [...pairs, [i.toString(), JSON.stringify(e)]]
            i++
        })
        await AsyncStorage.multiSet(pairs)
        return true
    }catch(e){  
        return false
    }
}

export async function getClassifications(){
    let vs = [];
    let ids = ['1', '2', '3', '4', '5']
    try{
        vs = await AsyncStorage.multiGet(ids)
        return vs;
    }catch(e){
        return []
    }
}

