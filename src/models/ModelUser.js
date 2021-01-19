import ModelAbstract from './ModelAbstract';

class ModelUser extends ModelAbstract {

  static FIELD_STR_ID = 'id';
  static FIELD_STR_FIRST_NAME = 'first_name';
  static FIELD_STR_LAST_NAME = 'last_name';
  static FIELD_STR_EMAIL = 'email';
  static FIELD_STR_ROLE = 'role';

  static FIELDS = [
    ModelUser.FIELD_STR_ID,
    ModelUser.FIELD_STR_FIRST_NAME,
    ModelUser.FIELD_STR_LAST_NAME,
    ModelUser.FIELD_STR_EMAIL,
    ModelUser.FIELD_STR_ROLE,
  ];

  constructor(objFields) {
    super(ModelUser.FIELDS, objFields);
  }

  static getInstance() {
    return new ModelUser(
      'testId',
      'John',
      'Doe',
      'john@gmail.com',
      'admin'
    );
  }
}

export default ModelUser;