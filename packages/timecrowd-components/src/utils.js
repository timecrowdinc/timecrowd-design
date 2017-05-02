export function mapCssClasses(defaults, customs, conditionals) {
  let classes = [defaults]

  if (typeof(customs) === 'string') {
    classes.push(customs)
  }

  if (Object.prototype.toString.call(conditionals) === '[object Object]') {
    Object.keys(conditionals).forEach((key) => {
      if (conditionals[key]) {
        classes.push(key)
      }
    })
  }

  return classes.join(' ')
}

export const bootstrapContextuals = [
  'normal',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger'
]

export const bootstrapSizes = [
  'textsize',
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
]
