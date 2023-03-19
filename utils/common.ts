export const ClassName = (properties: any) => {
  let result = '';

  if (properties.common) {
    result += `${properties.common} `;
  }

  Object.keys(properties).forEach((size) => {
    if (size === 'common') return;
    result += `${Object.keys(properties[size])
      .map((prop) => {
        return `${size === 'xs' ? `` : `${size}:`}${prop}-[${
          properties[size][prop]
        }]`;
      })
      .join(' ')} `;
  });

  return result;
};
