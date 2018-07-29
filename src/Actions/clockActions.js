export const START = 'START_TIMER'
export const PAUSE = 'PAUSE_TIMER'
export const END = 'END_TIMER'

export const startTimer = () => {
  return {
    type: START,
  }
}

export const pauseTimer = () => {
  return {
    type: PAUSE,
  }
}

export const endTimer = () => {
  return {
    type: END,
  }
}
