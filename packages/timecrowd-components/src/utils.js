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

// Bootstrap Contextual color (extended)

export const bootstrapContextuals = [
  'normal',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'link',
]

// Bootstrap Sizes (extended)

export const bootstrapSizes = [
  'textsize',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
]
