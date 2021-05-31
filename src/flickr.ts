enum resolution {
  extra_small = '75x75',
  small = '240x180',
  medium = '500x375',
  large = '1024x768',
  extra_large = '3072x2304'
}

type resolution_screen = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'
type screen = string

const validateScreen = (resolution:resolution_screen):screen => {
  return resolution
}

console.log(validateScreen("3072x2304"))