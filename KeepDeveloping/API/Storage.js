import AsyncStorage from '@react-native-async-storage/async-storage';


var arr = [];

function compare(a,b){
    if(a == null) return 1
    else if(b == null) return -1
    let dif = b.score - a.score
    if(dif != 0)
        return dif
    else{
        return b.level - a.level
    }
}

export async function saveGame(quiz){
    try{
        arr = await getClassifications()
        let key = "@KeepDeveloping_C"
        let games = []
        let i = 1
        arr.forEach(e =>{
            games = [...games, e[key+i.toString()]]
            i++
        })
        games = [...games, quiz]

        games.sort(compare)
        if(games.length > 5)
            games.pop()
        let pairs = []
        i = 1
        games.forEach(e => {
            pairs = [...pairs, [key+i.toString(), JSON.stringify(e)]]
            i++
        })

        await AsyncStorage.multiSet(pairs)
        return true
    }catch(e){  
        return false
    }
}

export async function clean(){
    let ids = ['@KeepDeveloping_C1', '@KeepDeveloping_C2', '@KeepDeveloping_C3', '@KeepDeveloping_C4', '@KeepDeveloping_C5']

    try{
        await AsyncStorage.multiRemove(ids)
        return true
    }catch(e){
        return false
    }
}

export async function getClassifications(){
    let vs = [];
    let ids = ['@KeepDeveloping_C1', '@KeepDeveloping_C2', '@KeepDeveloping_C3', '@KeepDeveloping_C4', '@KeepDeveloping_C5']
    try{
        vs = await AsyncStorage.multiGet(ids)
        let r = [];
        vs.forEach(e => {
            let obj = {}
            obj[e[0]] = JSON.parse(e[1])
            r = [...r, obj]
        })
        return r;
    }catch(e){
        return []
    }
}

