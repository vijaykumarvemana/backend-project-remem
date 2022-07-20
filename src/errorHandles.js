export const notFoundHandler = (err, req, res, next) => {
  if(err.status === 404) {
    res.status(err.status).send({ message: 'Not found' });
  } else {
    next(err);
  }
}

export const badRequestHandler = (err, req, res, next) => {
  if(err.status === 400) {
    res.status(err.status).send({ message: 'Bad request' });
  } else {
    next(err);
  }
}


export const internalServerErrorHandler = (err, req, res, next) => {
    if(err.status === 500) {
        res.status(err.status).send({ message: 'Internal server error' });
    } else {
        next(err);
    }
    }


export const unauthorizedHandler = (err, req, res, next) => {
    if(err.status === 401) {
        res.status(err.status).send({ message: 'Unauthorized' });
    } else {
        next(err);
    }
    }

    
export const forbiddenHandler = (err, req, res, next) => {
    if(err.status === 403) {
        res.status(err.status).send({ message: 'Forbidden' });
    } else {
        next(err);
    }
    }




