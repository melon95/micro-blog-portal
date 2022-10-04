export const combineClass = (con: boolean, className: string, ...baseClassNames: string[]) => {
  const baseClassName = baseClassNames?.join(' ')
  if (con) {
    if (baseClassName) {
      return `${baseClassName} ${className}`
    }
    return className
  }
  return baseClassName
}