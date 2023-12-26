import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, get, child, onValue } from 'firebase/database'

export const DB_PATH_USER = `/users`
export const DB_PATH_BLUE_ARCHIVE_CURRENCY = `/blue-archive-currencies`

export const getUID = () => {
  const auth = getAuth()
  return auth.currentUser ? auth.currentUser.uid : false
}

export const getData = async (dbPath) => {
  const database = getDatabase()

  try {
    const snapshot = await get(child(ref(database), dbPath))
    const value = snapshot.val()
    return value ? value : false
  } catch (err) {
    console.error(err)
  }
}

export const getDataListen = (dbPath, callback) => {
  const database = getDatabase()
  const dbRef = ref(database, dbPath)
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val()
    callback(data)
  })
}

export const saveData = (dbPath, data) => {
  const database = getDatabase()
  set(ref(database, dbPath), data)
}

export const findUser = async () => {
  return await getData(`${DB_PATH_USER}/${getUID()}`)
}

export const saveUser = (user) => {
  const database = getDatabase()
  set(ref(database, `${DB_PATH_USER}/${getUID()}`), user)
}
