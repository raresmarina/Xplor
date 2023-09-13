import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login'; 
import { render, fireEvent } from '@testing-library/react';
import Signup from '../components/Signup'; 


test('renders signup form and allows user to type', () => {
  const { getByPlaceholderText } = render(<Signup />);
  
  const nameInput = getByPlaceholderText('Full Name');
  const emailInput = getByPlaceholderText('Email Address');
  const passwordInput = getByPlaceholderText('Password');
  const passwordConfirmInput = getByPlaceholderText('Repeat Password');
  
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@email.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(passwordConfirmInput, { target: { value: 'password123' } });
  
  expect(nameInput.value).toBe('John Doe');
  expect(emailInput.value).toBe('john@email.com');
  expect(passwordInput.value).toBe('password123');
  expect(passwordConfirmInput.value).toBe('password123');
});



test('renders signup form and allows user to type', () => {
  const { getByPlaceholderText } = render(<Signup />);
  
  const nameInput = getByPlaceholderText('Full Name');
  const emailInput = getByPlaceholderText('Email Address');
  const passwordInput = getByPlaceholderText('Password');
  const passwordConfirmInput = getByPlaceholderText('Repeat Password');
  
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@email.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(passwordConfirmInput, { target: { value: 'password123' } });
  
  expect(nameInput.value).toBe('John Doe');
  expect(emailInput.value).toBe('john@email.com');
  expect(passwordInput.value).toBe('password123');
  expect(passwordConfirmInput.value).toBe('password123');
});

test('renders login form and allows user to type', () => {
  const { getByPlaceholderText } = render(<Login />);
  
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  
  fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  expect(emailInput.value).toBe('test@email.com');
  expect(passwordInput.value).toBe('testpassword');
});
test('renders 404 page not found message', () => {
    const { getByText } = render(<NotFound />);
    
    const notFoundMessage = getByText('404 Page Not Found');
    
    expect(notFoundMessage).toBeInTheDocument();
  });
  test('renders place details correctly', () => {
    const place = {
      name: 'Sample Place',
      photo: {
        images: {
          large: {
            url: 'https://www.example.com/sample-image.jpg'
          }
        }
      },
      rating: '4.5',
      num_reviews: 10,
      price_level: '$$',
      ranking: 1,
      awards: [
        {
          images: {
            small: 'https://www.example.com/award-image.jpg'
          },
          display_name: 'Sample Award'
        }
      ],
      cuisine: [
        {
          name: 'Sample Cuisine'
        }
      ],
      address: '123 Sample Street',
      phone: '123-456-7890',
      web_url: 'https://www.tripadvisor.com/sample-place',
      website: 'https://www.example.com/sample-place'
    };
  
    const { getByText, getByAltText } = render(<PlaceDetails place={place} />);
    
    // Assert place details are rendered correctly
    expect(getByText('Sample Place')).toBeInTheDocument();
    expect(getByAltText('Sample Place')).toBeInTheDocument();
    expect(getByText('4.5')).toBeInTheDocument();
    expect(getByText('10 reviews')).toBeInTheDocument();
    expect(getByText('$$')).toBeInTheDocument();
    expect(getByText('Ranking')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByAltText('Sample Award')).toBeInTheDocument();
    expect(getByText('Sample Award')).toBeInTheDocument();
    expect(getByText('Sample Cuisine')).toBeInTheDocument();
    expect(getByText('123 Sample Street')).toBeInTheDocument();
    expect(getByText('123-456-7890')).toBeInTheDocument();
    expect(getByText('Trip Advisor')).toBeInTheDocument();
    expect(getByText('Website')).toBeInTheDocument();
  });
  test('renders map and controls correctly', () => {
    render(<Map apiKey="YOUR_GOOGLE_MAPS_API_KEY" />);
    
    // Assert map and controls are rendered correctly
    const mapElement = screen.getByRole('presentation');
    const startDestinationInput = screen.getByLabelText('Search');
    const travelModeSelect = screen.getByLabelText('Travel Mode:');
    const calculateRouteButton = screen.getByText('Calculate Route');
    const selectedDestinationsHeading = screen.getByRole('heading', { name: 'Selected Destinations:' });
    const deleteDestinationsButton = screen.getByText('Delete Destinations');
    
    expect(mapElement).toBeInTheDocument();
    expect(startDestinationInput).toBeInTheDocument();
    expect(travelModeSelect).toBeInTheDocument();
    expect(calculateRouteButton).toBeInTheDocument();
    expect(selectedDestinationsHeading).toBeInTheDocument();
    expect(deleteDestinationsButton).toBeInTheDocument();
  });
  test('renders Packing component correctly', () => {
    render(<Packing />);
    
    // Assert NavbarWithSidebar, Main, and Footer components are rendered correctly
    const navbarWithSidebarElement = screen.getByRole('navigation');
    const mainElement = screen.getByRole('main');
    const footerElement = screen.getByRole('contentinfo');
    
    expect(navbarWithSidebarElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
  import { render, screen } from '@testing-library/react';
import Map from '../components/Map';

test('renders Map component correctly', () => {
  const coords = { lat: 51.5074, lng: -0.1278 };
  const places = [
    { name: 'Place 1', latitude: 51.5074, longitude: -0.1278, rating: 4.5 },
    { name: 'Place 2', latitude: 51.5074, longitude: -0.1278, rating: 3.8 },
    // Add more places as needed
  ];
  const setCoords = jest.fn();
  const setBounds = jest.fn();
  const setChildClicked = jest.fn();

  render(
    <Map
      coords={coords}
      places={places}
      setCoords={setCoords}
      setBounds={setBounds}
      setChildClicked={setChildClicked}
    />
  );
  
  // Assert Map component is rendered correctly
  const mapContainerElement = screen.getByRole('figure');
  const markers = screen.getAllByRole('img');
  const ratings = screen.getAllByRole('img', { name: 'read-only' });
  
  expect(mapContainerElement).toBeInTheDocument();
  expect(markers.length).toBe(places.length);
  expect(ratings.length).toBe(places.length);
});
import { render, screen, fireEvent } from '@testing-library/react';
import AddItemControls from '../components/AddItemControls';

describe('AddItemControls component', () => {
  test('renders AddItemControls component and handles form submission', () => {
    const handleSubmitNewItem = jest.fn();
    const doesAlreadyExistInItems = jest.fn().mockReturnValue(false);

    render(
      <AddItemControls handleSubmitNewItem={handleSubmitNewItem} doesAlreadyExistInItems={doesAlreadyExistInItems} />
    );

    const inputField = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'save' });

    // Test input field change
    fireEvent.change(inputField, { target: { value: 'new item' } });
    expect(inputField.value).toBe('new item');

    // Test form submission with valid input
    fireEvent.click(submitButton);
    expect(handleSubmitNewItem).toHaveBeenCalledWith('New item');

    // Test form submission with empty input
    fireEvent.change(inputField, { target: { value: '' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Please enter an item')).toBeInTheDocument();
    expect(handleSubmitNewItem).not.toHaveBeenCalled();

    // Test form submission with duplicate item
    doesAlreadyExistInItems.mockReturnValue(true);
    fireEvent.change(inputField, { target: { value: 'duplicate item' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Item already exists')).toBeInTheDocument();
    expect(handleSubmitNewItem).not.toHaveBeenCalled();
  });
});
describe('TravelCard component', () => {
    const category = 'clothing';
    const initialCardItems = [
      { tKey: 'item1', isChecked: false },
      { tKey: 'item2', isChecked: true },
      { tKey: 'item3', isChecked: false },
    ];
  
    test('renders TravelCard component and handles interactions', () => {
      const handleSubmitNewItem = jest.fn();
      const doesAlreadyExistInItems = jest.fn().mockReturnValue(false);
  
      render(
        <TravelCard
          category={category}
          initialCardItems={initialCardItems}
          handleSubmitNewItem={handleSubmitNewItem}
          doesAlreadyExistInItems={doesAlreadyExistInItems}
        />
      );
  
      const addButton = screen.getByRole('button', { name: 'add_item' });
      const doneButton = screen.getByRole('button', { name: 'done' });
  
      // Test initial rendering
      expect(screen.getByText('clothing')).toBeInTheDocument();
      expect(screen.getAllByRole('checkbox')).toHaveLength(3);
  
      // Test "Add Item" button click
      fireEvent.click(addButton);
      expect(screen.getByPlaceholderText('item')).toBeInTheDocument();
  
      // Test form submission with valid input
      const inputField = screen.getByPlaceholderText('item');
      fireEvent.change(inputField, { target: { value: 'new item' } });
      fireEvent.click(screen.getByRole('button', { name: 'save' }));
      expect(handleSubmitNewItem).toHaveBeenCalledWith('New item');
  
      // Test form submission with empty input
      fireEvent.change(inputField, { target: { value: '' } });
      fireEvent.click(screen.getByRole('button', { name: 'save' }));
      expect(screen.getByText('Please enter an item')).toBeInTheDocument();
      expect(handleSubmitNewItem).not.toHaveBeenCalled();
  
      // Test form submission with duplicate item
      doesAlreadyExistInItems.mockReturnValue(true);
      fireEvent.change(inputField, { target: { value: 'duplicate item' } });
      fireEvent.click(screen.getByRole('button', { name: 'save' }));
      expect(screen.getByText('Item already exists')).toBeInTheDocument();
      expect(handleSubmitNewItem).not.toHaveBeenCalled();
  
      // Test "Done" button click
      fireEvent.click(doneButton);
      expect(screen.queryByPlaceholderText('item')).not.toBeInTheDocument();
    });
  });