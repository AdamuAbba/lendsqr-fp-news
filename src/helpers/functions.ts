/**
 * a function that takes the authenticated user `displayName` and return the initials
 * @param `string`
 * @returns `initials`
 */
const getInitials = (someString: string) => {
  if (typeof someString === 'undefined') {
    return 'No Name';
  } else {
    const names: string[] = someString.split(' ');
    var initials: string = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials.split('').join(' . ');
  }
};

export {getInitials};
