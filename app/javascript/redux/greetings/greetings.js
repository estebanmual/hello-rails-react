const GETGREETING_BEGIN = 'hello-rails/greeting/GETGREETINGBEGIN';
const GETGREETING_SUCCESS = 'hello-rails/greeting/GETGREETINGSUCCESS';
const GETGREETING_FAILURE = 'hello-rails/greeting/GETGREETINGFAILURE';
export const GETGREETING = 'hello-rails/greeting/GETGREETING';
const BASE_URL = 'http://127.0.0.1:3000/greeting.json'
const INITIAL_STATE = {
  greeting: '',
  fetching: true,
};

export function getGreetingBegin() {
  return {
    type: GETGREETING_BEGIN,
  };
}

export function getGreetingSuccess(greeting) {
  return {
    type: GETGREETING_SUCCESS,
    payload: greeting,
  };
}

export function getGreetingFailure() {
  return {
    type: GETGREETING_FAILURE,
  };
}


export default function reducer(state = INITIAL_STATE, action) {
  let greeting = '';
  switch (action.type) {
    case GETGREETING:
      console.log('Start');
      getGreeting();
    case GETGREETING_SUCCESS:
      console.log('Success');
      return {
        greeting: action.payload,
        fetching: false,
      };
    case GETGREETING_BEGIN:
      console.log('Begin');
      return {
        ...state,
        fetching: true,
      };
    case GETGREETING_FAILURE:
      console.log('Failure');
      return {
        ...state,
        fetching: false,
      };
    default: return state;
  }
}

export function getGreeting() {
  return (dispatch) => {
    console.log('Getting greeting');
    const url = `${BASE_URL}`;
    dispatch(getGreetingBegin());
    fetch(url).then((response) => {
      response.json().then((json) => {
        const greeting = json.greeting;
        dispatch(getGreetingSuccess(greeting));
      }).catch(() => dispatch(getGreetingFailure()));
    })
  };
}