The component is a React form for driver and service details with nested dropdowns.

Originally, nested options were arrays, which made dynamic rendering tricky. We changed them to objects for easier management and updates.

The main issue was with the subcategory dropdown rendering multiple times unnecessarily.

This happened because we didn’t check if the selected item actually had options (item.length > 0).

After adding this check, the subcategory dropdown only renders when there are valid options.

handleChange was updated to reset dependent fields when a parent dropdown changes, keeping nested selections in sync.

Styling was simplified and cleaned for a minimal, readable look.

The code now works correctly for the “General Service” path we tested.

Overall, the small but crucial bug was fixed, and the code is now clean, maintainable, and ready for other service types.