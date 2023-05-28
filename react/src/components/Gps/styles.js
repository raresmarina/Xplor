const styles = {
  container: {
    display: 'flex',
  },
  controlsContainer: {
    flex: '1 1 30%',
    padding: '20px',
    backgroundColor: '#f1f1f1',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  addButton: {
    width: '50%',
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '#FF5A5F',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  modeButton: {
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '#FF5A5F',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  duration: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  noRouteMessage: {
    marginBottom: '10px',
    color: 'red',
    fontStyle: 'italic',
  },
  mapContainer: {
    flex: '70%',
  },
  selectedDestinations: {
    marginBottom: '20px',
    listStyleType: 'none',  // Removes the bullet points from the list
    padding: '0',  // Removes the default padding from the list
    border: '1px solid #ddd',  // Adds a light grey border to the list
    borderRadius: '4px',  // Rounds the corners of the list
    backgroundColor: '#f9f9f9',  // Changes the background color of the list
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',  // Adds a subtle shadow to the list
  },
  destinationItem: {
    padding: '10px 15px',  // Adds padding to each list item
    borderBottom: '1px solid #ddd',  // Adds a bottom border to each list item
    fontSize: '16px',  // Changes the font size of each list item
  },
  destinationItemFirst: {
    borderTopLeftRadius: '4px',  // Rounds the top left corner of the first list item
    borderTopRightRadius: '4px',  // Rounds the top right corner of the first list item
  },
  destinationItemLast: {
    borderBottomLeftRadius: '4px',  // Rounds the bottom left corner of the last list item
    borderBottomRightRadius: '4px',  // Rounds the bottom right corner of the last list item
    borderBottom: 'none',  // Removes the bottom border from the last list item
  },
  
  
};

export default styles;
