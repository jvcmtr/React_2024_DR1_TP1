export function box(props = {}) {
  return {
    height: "100px",
    width: "100px",
    backgroundColor: "white",
    margin: "max(1%, 2px)",
    pading: "max(1%, 2px)",
    ...props,
  };
}

export function flexContainer(props = {}) {
  return {
    display: "flex",
    backgroundColor: 'gray',
    margin: "10px",
    pading: "10px",
    ...props,
  };
}

export function colorBox(colour, props = {}) {
  return box({ backgroundColor: colour, ...props });
}

export function gridBox(colour, props={}){
  return {
    backgroundColor: colour,
    margin: "max(1%, 2px)",
    pading: "max(1%, 2px)",
    ...props,
  };
}