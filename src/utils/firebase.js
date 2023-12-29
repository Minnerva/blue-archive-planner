import { getAuth } from 'firebase/auth'
import { 
  getDatabase, ref, query, push, set, get, child, onValue, 
  orderByKey, orderByChild, limitToFirst, limitToLast, startAt, endAt,
  endBefore
 } from 'firebase/database'

export const getUID = () => {
  const auth = getAuth()
  return auth.currentUser ? auth.currentUser.uid : false
}

export const getData = async (db_path) => {
  const db = getDatabase()

  try {
    const snapshot = await get(child(ref(db), db_path))
    const value = snapshot.val()
    return value ? value : false
  } catch (err) {
    console.error(err)
  }
}

export const getDataListen = (db_path, callback) => {
  const db = getDatabase()
  const dbRef = ref(db, db_path)
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val()
    callback(data)
  })
}

export const saveData = (db_path, data) => {
  const db = getDatabase()
  set(ref(db, db_path), data)
}

export const pushData = (db_path, data) => {
  const db = getDatabase()
  const dbRef = ref(db, db_path)
  set(push(dbRef), data)
}

export const setListDataListen = (db_path, callback, options = {}) => {
  if (!options.filters) options.filters = []
  const db = getDatabase()
  const queryConstraints = []
  let queryRef = null

  switch (options.order) {
    case `child`:
      queryConstraints.push(orderByChild(options.order_key))
      break
    case `key`:
      queryConstraints.push(orderByKey())
      break
    case `value`:
      queryConstraints.push(orderByValue(options.order_key))
      break
  }

  // TODO: Add more accepted filter
  // https://firebase.google.com/docs/database/web/lists-of-data#filtering_data
  options.filters.forEach(filter => {
    switch (filter.type) {
      case `first`:
        queryConstraints.push(limitToFirst(filter.value))
        break
      case `last`:
        queryConstraints.push(limitToLast(filter.value))
        break
      case `between`:
        if (options.order === `key`) { // required order
          queryConstraints.push(startAt(filter.start))
          queryConstraints.push(endAt(filter.end))
        }
        break
      case `endBefore`:
        if (options.order === `key`) { // required order
          queryConstraints.push(endBefore(filter.value))
        }
        break
    }
  })

  queryRef = query(ref(db, db_path), ...queryConstraints)
  onValue(queryRef, (snapshopt) => callback(snapshopt.val()))
}
